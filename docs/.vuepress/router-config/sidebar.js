const blog = [
    {
        title: '网络编程',
        collapsable: false,
        children: [
            'network/osi/osi',
            'network/osi/osi-dfw',
            'network/tcpip/tcpip',
            'network/ip/ip',
            'network/tcp/tcp',
            'network/udp/udp',
            'network/socket/socket'
        ]
    }
]

const sidebar = {
    '/blog/':blog
}

module.exports = sidebar;