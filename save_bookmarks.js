
function addBookarkStyles(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.innerHTML = css;
    head.appendChild(style);
}
 
addBookarkStyles(`
#temp_data {
    visibility: hidden;
}
`);
 
(function() {
    'use strict';

    let iPage, oBookMarks, sTItle, iLastView;
    let sDomain = window.location.hostname;

    iPage = '.group_page a';
    oBookMarks = '.bookmark_item';
    sTItle = '.bookmark_title';
    iLastView = '.bookmark_chap a';

    if(sDomain === 'manganelo.com') {
        iPage = '.group-page a';
        oBookMarks = '.bookmark-item';
        sTItle = '.item-story-name';
        iLastView = '.item-title a';
    }

    let iPageCount = parseInt($(`${iPage}`).last().text().replace(/\D+/g, ''));
 
    const oGetBookmarks = () => {
        $('#temp_data').remove();
        $('body').append("<div id='temp_data'>");
        let pageSuccess = 0; 
        let bookmarkedTitles = '';
        for(var i = 0; i < iPageCount; i++) {
            $("#temp_data").append(`<div id='page${i+1}'>`);
            $(`#page${i+1}`).load(`https://${sDomain}/bookmark?page=${i+1} ${oBookMarks}`, (resp,status,xhr) => {
                if(status == "success") { pageSuccess++}
                if(pageSuccess == iPageCount) {
                    let oItem = $(`#temp_data ${oBookMarks}`);
                    for(var j = 0; j < oItem.length; j++) {
                        if($(oItem[j]).find(`${sTItle}`).text()) {
                            let sLastChap = $(oItem[j]).find(`${iLastView}`), oBookmarkItem = $(oItem[j]).find(`${sTItle}`);
                            if(oBookmarkItem.length > 0) {
                                bookmarkedTitles += oBookmarkItem.text() + ` | `+oBookmarkItem.attr('href') + `  | ${sLastChap.length > 0 ? sLastChap[0].text : 'Not Found' } \n`
                            }
                        }
                    }

                    console.log(bookmarkedTitles);
                    oSavetoText(bookmarkedTitles, 'bookmark.txt', 'text/plain');
                    $('#temp_data').remove()
                }
            })
        }
    }

    const oSavetoText = (content, filename, contentType) => {
        const oElement = document.createElement('a');
        const file = new Blob([content], {type: contentType});
        
        oElement.href= URL.createObjectURL(file);
        oElement.download = filename;
        oElement.click();
      
          URL.revokeObjectURL(oElement.href);
    };


    oGetBookmarks();

})();