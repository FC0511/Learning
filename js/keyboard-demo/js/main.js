// 1. 初始化数据
var hashA = init()
var keys = hashA['keys']
var hash = hashA['hash']

// 2. 生成键盘
generateKeyboard(keys, hash)

// 3. 监听用户动作
listenToUser(hash)


function createSpan(textContent) {
    var span = tag('span')
    span.textContent = textContent
    span.className = "text"
    return span
}

function createButton(id) {
    var button = tag('button')
    button.textContent = '编辑'
    button.id = id
    button.onclick = function (e) {
        var img2 = this.previousSibling
        var key = this.id
        var x = prompt('给我一个网址')
        hash[key] = x
        img2.src = 'http://' + x + '/favicon.ico'
        img2.onerror = function (e) {
            e.target.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
        }
        localStorage.setItem('urls', JSON.stringify(hash))
    }
    return button
}

function createImage(domain) {
    var img = tag('img')
    if (domain) {
        img.src = 'http://' + domain + '/favicon.ico'
    } else {
        img.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
    }
    img.onerror = function (e) {
        e.target.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
    }
    return img
}

function init() {
    var keys = {
        '0': {0: 'q', 1: 'w', 2: 'e', 3: 'r', 4: 't', 5: 'y', 6: 'u', 7: 'i', 8: 'o', 9: 'p', length: 10},
        '1': {0: 'a', 1: 's', 2: 'd', 3: 'f', 4: 'g', 5: 'h', 6: 'j', 7: 'k', 8: 'l', length: 9},
        '2': {0: 'z', 1: 'x', 2: 'c', 3: 'v', 4: 'b', 5: 'n', 6: 'm', length: 7},
        'length': 3
    }
    var hash = {
        'q': 'qq.com',
        'w': 'weibo.com',
        'e': 'ele.me',
        'r': 'renren.com',
        't': 'tianya.com',
        'y': 'youtube.com',
        'u': 'uc.com',
        'i': 'iqiyi.com',
        'o': 'opera.com',
        'p': undefined,
        'a': 'www.acfun.cn',
        'b': 'www.bilibili.com',
        's': 'sohu.com',
        'z': 'zhihu.com',
        'm': 'www.mcdonalds.com.cn'
    }
    // 取出 localStorage 中的 urls 对应的 hash
    var hashInLocalStorage = getFromLocalStorage('urls')
    if (hashInLocalStorage) {
        hash = hashInLocalStorage
    }
    return {
        "keys": keys,
        "hash": hash
    }
}

function generateKeyboard(keys, hash) {
    for (var i = 0; i < keys.length; i++) {
        var div = tag('div')
        div.className = 'row'
        main.appendChild(div)
        var row = keys[i]
        for (var j = 0; j < row.length; j++) {
            var span = createSpan(row[j])
            var button = createButton(row[j])
            var img = createImage(hash[row[j]])
            var kbd = tag('kbd')
            kbd.className = 'key'
            kbd.appendChild(span)
            kbd.appendChild(img)
            kbd.appendChild(button)
            div.appendChild(kbd)
        }
    }
}

function listenToUser(hash) {
    document.onkeypress = function (e) {
        var key = e.key
        var website = hash[key]
        window.open('http://' + website, '_blank')
    }
}

// 工具函数
function getFromLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name) || 'null')
}

function tag(tagName) {
    return document.createElement(tagName)
}