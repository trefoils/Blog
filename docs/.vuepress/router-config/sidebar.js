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

const sidebar = {
    '/blog/':blog
}

module.exports = sidebar;