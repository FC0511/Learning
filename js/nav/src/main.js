const $siteList = $('.siteList');
const $lastLi = $siteList.find('li.last');
const siteName = localStorage.getItem('siteName');
const siteNameObject = JSON.parse(siteName);
const hashMap = siteNameObject || [
    {logo: 'A', url: 'https://www.acfun.cn'},
    {logo: 'B', url: 'https://www.bilibili.com'}
];

const simplifyUrl = (url) => {
    return url.replace('https://', '')
        .replace('http://', '')
        .replace('www.', '')
        .replace(/\/.*/, '') // 删除 / 开头的内容
};

const render = () => {
    $siteList.find('li:not(.last)').remove();
    hashMap.forEach((node, index) => {
        const $li = $(`<li>
      <div class="site">
        <div class="logo">${node.logo}</div>
        <div class="link">${simplifyUrl(node.url)}</div>
        <div class="close">
          <svg class="icon">
            <use xlink:href="#icon-close"></use>
          </svg>
        </div>
      </div>
    </li>`).insertBefore($lastLi);
        $li.on('click', () => {
            window.open(node.url);
        }).on('click', '.close', (e) => {
            e.stopPropagation();
            hashMap.splice(index, 1);
            render()
        })
    })
};

render();

$('.addButton').on('click', () => {
    let url = window.prompt('你要添加的网址是？');
    if (url.indexOf('http') !== 0) {
        url = 'https://' + url
    }
    hashMap.push({
        logo: simplifyUrl(url)[0].toUpperCase(),
        url: url
    });
    render()
});

window.onbeforeunload = () => {
    const string = JSON.stringify(hashMap);
    localStorage.setItem('siteName', string)
};

$(document).on('keypress', (e) => {
    let $searchInput = $(e.target);
    if ($searchInput.hasClass('searchInput')) {
        return
    }
    const {key} = e;
    for (let i = 0; i < hashMap.length; i++) {
        if (hashMap[i].logo.toLowerCase() === key) {
            window.open(hashMap[i].url)
        }
    }
});