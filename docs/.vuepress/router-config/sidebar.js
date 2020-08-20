const Blog = [
    {
        title: '基础协议',
        collapsable: false,
        children: [
            'network/osi/osi',
            'network/osi/osi-dfw',
            'network/tcpip/tcpip',
            'network/ip/ip',
            'network/tcp/tcp',
            'network/udp/udp'
        ]
    },
    {
        title: 'Mac软件',
        collapsable: false,
        children: [
            'mac/homebrew/brew',
            'mac/nvm/nvm',
            'mac/office2019/office2019',
            'mac/oh-my-zsh/oh-my-zsh',
        ]
    }
]

//数据库
const DataBase = [
    {
        title: '数据库',
        collapsable: false,
        children: [
            'network/basic/basic',
        ]
    },
]
//信息安全
const Infomation = [
    {
        title: '信息安全',
        collapsable: false,
        children: [
            'basic/basic',
        ]
    }
]
//网络编程
const Network = [
    {
        title: '网络编程',
        collapsable: false,
        children: [
            'basic/basic',
            'cs-mode/cs-mode',
            'p2p-mode/p2p-mode',
        ]
    }
]

const sidebar = {
    '/blog/':Blog,
    '/study/network/':Network,
    '/study/database/':DataBase,
    '/study/infomation/':Infomation,
    
}

module.exports = sidebar;