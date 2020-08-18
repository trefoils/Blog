const blog = [
    {
        title: '网络编程',
        collapsable: false,
        children: [
            'network/osi/osi',
            'network/tcpip/tcpip'
        ]
    }
]

const sidebar = {
    '/blog/':blog
}

module.exports = sidebar;