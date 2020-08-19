(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{369:function(v,_,t){"use strict";t.r(_);var I=t(42),i=Object(I.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"ip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ip"}},[v._v("#")]),v._v(" IP")]),v._v(" "),t("p",[v._v("IP（Internet Protocol，互联网协议）是实现网络之间互联的基础协议。接入Internet的不同国家和地区的、不同操作系统的、成千上万的计算机要实现相互通信，就要遵守共同的通信准则（协议)")]),v._v(" "),t("h2",{attrs:{id:"ip基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ip基础"}},[v._v("#")]),v._v(" IP基础")]),v._v(" "),t("p",[v._v("IP包含两个最基本的功能，即寻址和分片。")]),v._v(" "),t("p",[v._v("就好像必须拥有电话号码才能拨打或接听电话一样，连接到Internet的每个主机都至少有一个IP地址，从而将其与网络上的其他主机区分开来。源主机必须知道远程主机的IP地址才能向其发送数据。源主机可以向已知IP地址的目的主机发送数据包，并借助于网络中的网络设备寻找到达目的主机的路径，最终将数据包发送到目的地，这个过程即为寻址。")]),v._v(" "),t("p",[v._v("当发送或接收数据时（例如收取电子邮件或浏览网页），信息将被拆分成若干个小块，称为数据包。每个数据包都包含发送者和接收者的IP地址。数据包首先被发送到网关，网关读取数据包中的目的地址，然后将其转发到能够到达该目的地址的邻近的网关；每个网关都重复上面的过程，直到网关认定目的主机在其可以直接到达的网段或域中，则网关将数据包直接发送给目的计算机。")]),v._v(" "),t("p",[v._v("因为数据包可以通过Internet中不同的路径到达目的地址，所以数据包到达目的地址的顺序可能与发送时的顺序不同。IP只负责发送数据包，而由TCP（传输控制协议）负责将数据包按照正确的顺序进行排序。")]),v._v(" "),t("p",[v._v("IP是无连接的协议，也就是说在通信的两个端点之间不存在持续的连接。在Internet上传输的每个数据包都被看作是独立的数据单元，与其他的数据包没有任何关系。IP在OSI通信协议的第3层，即网络层。目前应用最广泛的IP版本为IPv4，但随着IP地址资源被大量占用，很多网络也开始支持IPv6。IPv6可以提供更多的长地址，因此能够支持更多的Internet用户")]),v._v(" "),t("h2",{attrs:{id:"ip数据报的结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ip数据报的结构"}},[v._v("#")]),v._v(" IP数据报的结构")]),v._v(" "),t("p",[t("img",{attrs:{src:"/images/network/ip.jpeg",alt:"image"}})]),v._v(" "),t("ol",[t("li",[t("p",[v._v("版本和协议。IP数据报的第一个域就是版本域，长度为4 bit。它表示该数据报对应的IP协议的版本号，不同IP协议版本规定的数据报格式是不同的，目前使用的IP协议版本是IPv4，下一代是IPv6。版本域的值为4，就表示IPv4，版本域的值为6，则表示IPv6。")])]),v._v(" "),t("li",[t("p",[v._v("长度。IP数据报报头中有两个表示长度的字段：一个是报头长度；另一个是总长度。报头长度以4 byte为单位，指出了该报头区的长度。此域最小值为5，即报头最小长度为20 byte（4byte×5）。如果含有选项域字段，则长度取决于选项字段长度，协议规定报头长度最大值为15，表示报头最大长度为60 byte。所以，IP数据报的报头长度是可变的，为20～60 byte。总长度字段为16 bit，它定义了数据报的总长度。总长度最大值为65535字节，其中包括报头长度。这样，数据报的总长度减去报头长度就等于IP数据报中高层协议的数据长度。")])]),v._v(" "),t("li",[t("p",[v._v("服务类型。服务类型字段长度为8 bit，它用于规定对IP数据报的处理方式。利用该字段，发送端可为数据报分配优先级，并设定服务类型参数，如延迟、可靠性、成本等，指导路由器对数据报进行传送。当然，处理的效果还要受具体设备及网络环境限制。")])]),v._v(" "),t("li",[t("p",[v._v("生存时间。IP数据报的路由选择具有独立性，所以，各数据报的传输时间也不相同。如果出现选路错误，可能造成数据报在网络中无休止地循环流动。为此，生存时间（Time to Live，TTL）字段被设计以避免这种情形的发生。沿途路由器对该字段的处理方法是“先减后查，为0抛弃”。")])]),v._v(" "),t("li",[t("p",[v._v("协议。协议指的是使用此数据报的高层协议类型，如TCP或UDP等，协议域长度为8 bit。")])]),v._v(" "),t("li",[t("p",[v._v("头部校验和。头部校验和字段用来保证IP数据报报头的完整性。")])]),v._v(" "),t("li",[t("p",[v._v("地址。地址字段包括源地址和目的地址。源地址和目的地址的长度都是32 bit，分别表示发送数据报的主机和接收数据报的主机的地址。在数据报的整个传输过程中，无论选择什么样的路径，源地址和目的地址始终保持不变。")])]),v._v(" "),t("li",[t("p",[v._v("标识、标志和片偏移。这3个字段和IP数据报的分片重组相关，将在后面介绍。")])]),v._v(" "),t("li",[t("p",[v._v("选项。IP选项字段主要用于控制和测试，用户可以根据需要来选择是否使用该字段。但作为IP协议的组成部分，所有实现IP的设备都要能处理选项字段。在使用选项字段的过程中，可能会造成报头部分长度不是整字节，这时可以通过填充位来处理。")])])]),v._v(" "),t("h2",{attrs:{id:"ip的关键机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ip的关键机制"}},[v._v("#")]),v._v(" IP的关键机制")]),v._v(" "),t("p",[v._v("IP使用4种关键机制来提供服务，即服务类型（Type of Service，TOS）、生存时间（Time toLive，TTL）、选项和包头校验和。")]),v._v(" "),t("ol",[t("li",[v._v("服务类型")])]),v._v(" "),t("p",[v._v("服务类型代表提供服务的质量，它由一组抽象的参数组成，表示Internet中各网络提供的服务选择。网关可以根据服务类型来选择到达指定网络的实际传输参数、下一跳（即从网关跳转到的下一个地址）使用的网络或者路由一个Internet报文的下一个网关。")]),v._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[v._v("生存时间")])]),v._v(" "),t("p",[v._v("生存时间表示一个Internet报文生存期的上限，由报文的发送者来设置。可以把生存时间看作是数据包的寿命计数器。为了防止数据包在网络中无休止地被传递下去，或者由于传输路径造成死循环，每个IP数据包中都包含一个寿命计数器。数据包在网络传输的过程中，每经过一个路由器的处理，其中的寿命计数器就会递减1。如果寿命计数器的值等于0，并且报文还没有到达目的地，则该报文将会被丢失，发送者将会在稍后重新发送该报文。")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("为什么要在IP中使用生存时间的概念呢?")]),v._v(" "),t("p",[v._v("因为Internet的结构是复杂的，从一个主机发送报文到另外一个主机可以有多种路径，这一点与现实生活中一样，比如开车前往一个地点就可以有多种路线可供选择。因为数据包在网络传输中的路径是由路由器或交换机等网络设备根据当时的网络情况选择的，所以每次传输的路径都可能不同。一旦数据包在传输过程中进入了环路，如果不终止它的话，它可能一直这样循环下去。如果网络中存在大量这样循环的数据包，那就是一种灾难。使用生存时间就可以解决这种问题，它可以将长时间无法到达目的地的数据包丢弃。")])]),v._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[v._v("选项")])]),v._v(" "),t("p",[v._v("IP中的选项包括提供时间戳、安全性和特定的路由等。在有些情况下，使用选项对于控制功能是有帮助的，但在大多数情况下不需要使用选项。")]),v._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[v._v("包头校验和")])]),v._v(" "),t("p",[v._v("包头校验和提供了一个验证方法，用于检测在网络中传输的报文中的信息是否正确。如果数据在传输过程中出现错误，则包头校验将会失败，一旦网络设备检测到这种错误，就会将报文丢弃。IP并不提供有效的传输机制，端到端以及中继设备之间都没有确认机制。也就是说，IP中并不包含数据的错误控制机制，也没有重新发送和流量控制机制，只有包头校验和。")]),v._v(" "),t("h2",{attrs:{id:"ip地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ip地址"}},[v._v("#")]),v._v(" IP地址")]),v._v(" "),t("ol",[t("li",[v._v("IP地址的分类")])]),v._v(" "),t("p",[v._v("MAC地址用于数据链路层，但是当数据的传输要通过不同的网络类型时，MAC地址就不能满足了。为了解决这种问题，可使用一个更高层的协议，如IP协议，它允许给一个物理设备分配一个逻辑地址。不论使用哪种通信方法，都可以通过一个唯一的逻辑地址来识别这个设备。当然，在实际通信中，逻辑地址最终还要转换成物理地址。")]),v._v(" "),t("p",[v._v("IPv4协议中的IP地址共由32位二进制位组成，通常按照8位划分成4个字节。IP地址也分为网络ID和主机ID两部分。网络ID用来标识某个网段，主机ID用来标识某个网段内的一个TCP/IP节点。为了方便记忆和使用，IP地址最常见的形式是点分十进制，就是把4个字节分别换算成十进制来表示，中间用“。”来分隔，例如，211.69.0.3。")]),v._v(" "),t("p",[v._v("IPv4协议中的IP地址共32位，分为如下4类地址。")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("A类地址：最高位是0，随后的7位是网络地址，最后24位是主机地址。")])]),v._v(" "),t("li",[t("p",[v._v("B类地址：最高两位分别是1和0，随后的14位是网络地址，最后16位是主机地址。")])]),v._v(" "),t("li",[t("p",[v._v("C类地址：最高的三位是110，随后的21位是网络地址，最后8位是主机地址。")])]),v._v(" "),t("li",[t("p",[v._v("D类地址：最高的四位是1110，随后的所有位用来作为组播地址使用。")])]),v._v(" "),t("li",[t("p",[v._v("E类地址：最高的五位是11110，这类地址为保留地址，不使用。")])])]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("Tips")]),v._v(" "),t("p",[v._v("其中的A、B、C三类地址是用来作为主机地址的，D类地址被用来作为组播地址，E类被保留。经常使用的A、B、C三类地址")])]),v._v(" "),t("p",[v._v("根据分类IP地址的格式可以算出这3类地址中容纳的网络数和主机数。如图所示。")]),v._v(" "),t("p",[t("img",{attrs:{src:"/images/network/ip_addr.jpeg",alt:"image"}})]),v._v(" "),t("p",[v._v("可以看出，表中每个网络容纳的主机数目与实际按位数计算的值不对应，这是因为并不是所有的IP地址都能拿来分配，其中一些地址是有特殊含义的，大致有以下3种情况。")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("主机ID不能“全部是0”或“全部是1”。这是因为在Internet中，主机部分全部为0，表示的是网络地址，相当于电话号码中只有区号，没有电话号。主机部分全部为1，则表示这是一个面向某个网络中所有节点的广播地址，如C类地址211.69.0.255。")])]),v._v(" "),t("li",[t("p",[v._v("IP地址的网络ID和主机ID不能设成“全部为0”或“全部为1”。如果IP地址中的所有位都设置为1，就会得到一个地址255.255.255.255，这个地址的含义是向本地网络中的所有节点发送广播，这种广播路由器是不会传送的。当IP地址中的所有位都设置为0，IP地址就是0.0.0.0，这个地址的含义表示Internet中的所有网络。")])]),v._v(" "),t("li",[t("p",[v._v("IP地址的头一个字节不能是127。IP地址中的127.×××.×××.×××是用来做回环测试的地址，已经分配给本地环路。")])])]),v._v(" "),t("h2",{attrs:{id:"子网划分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#子网划分"}},[v._v("#")]),v._v(" 子网划分")]),v._v(" "),t("p",[v._v("TCP/IP协议设计之初，开发人员虽然意识到由于网络规模不同，需要的IP地址数目也会不同，并为此对IP地址进行了分类，但是这个分类的设计不够合理，其表现在以下3个方面。")]),v._v(" "),t("ol",[t("li",[v._v("IP地址空间的利用率有时很低。")]),v._v(" "),t("li",[v._v("给每个物理网络都分配一个网络号，会使路由表太大，从而导致路由效率下降。")]),v._v(" "),t("li",[v._v("两级的IP地址不够灵活。")])]),v._v(" "),t("p",[v._v("为此，从1985年开始，在IP地址中引入了子网划分的概念。子网编址技术的核心就是将原有的网络在逻辑上进一步划分为更小的网络，为了表示这些子网，需要为每个子网编号，在IP地址中就需要有子网ID，子网ID是不能从网络ID部分划分的，否则就改变了整个网络对外的地址，就如同改变了一个地区的电话区号一样，所以只能从主机ID部分划分。这样原来的主机ID部分就进一步划分成了子网ID和主机ID两部分")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("IP地址 = 子网ID + 主机ID\n")])])]),t("p",[v._v("原来的IP地址中，网络ID可以标识一个独立的物理网络，引入了子网模式后，一个子网的标识就需要网络ID和子网ID两部分联合才可以标识，所以子网的概念延伸了地址的网络部分。要注意的是，这部分的划分是属于一个网络内部的事情，划分只是使原来的网络具有了一定的层次，使网络便于管理和分配，这种划分是由网络管理员按照本网络的需要进行的，所以其他网络的主机是不知道这种划分的。本地的路由器当然必须清楚这个划分，当一个网络外的主机向网络内的主机发送数据时，路由器需要知道这个数据是发送到哪个子网的，这就需要使用子网掩码来判断目的网络究竟是哪个子网。")]),v._v(" "),t("p",[v._v("子网掩码的产生就是要在有子网划分的情况下，帮助路由器判断出IP地址中哪部分是网络ID，哪部分是主机ID。在二进制的逻辑运算中有一个“与”运算，“与”运算的特点就是任何数与0相“与”，结果为0；与1相“与”，结果不变。这样就可以编写一个32位的子网掩码，让其和需要判断的IP地址相“与”，把感兴趣的网络ID部分保留，不感兴趣的主机ID部分变成0，由此可以得出子网掩码的编写方法如下。")]),v._v(" "),t("ul",[t("li",[v._v("对应于IP地址的网络ID的所有位都设为1，1必须是连续的。")]),v._v(" "),t("li",[v._v("对应于主机ID的所有位都设为0。")])]),v._v(" "),t("p",[v._v("A类、B类和C类的默认子网掩码")]),v._v(" "),t("p",[v._v("A类　11111111000000000000000000000000　255.0.0.0")]),v._v(" "),t("p",[v._v("B类　11111111111111110000000000000000　 255.255.0.0")]),v._v(" "),t("p",[v._v("C类　11111111111111111111111100000000　 255.255.255.0")]),v._v(" "),t("p",[v._v("子网掩码就像一条一半透明的纸条，把感兴趣的网络ID部分显示出来，把不感兴趣的主机ID部分掩盖起来。具体的过程可以通过一个例子来了解，例如，现在有一台网络中的主机，其IP地址是211.69.1.183，这个网络的子网掩码是255.255.255.240，要想了解这台主机所处的子网，只需要用该网络的子网掩码与这台主机的地址相“与”就可以了。具体过程如图所示。")]),v._v(" "),t("p",[t("img",{attrs:{src:"/images/network/ip_addr_sub.jpeg",alt:"image"}})]),v._v(" "),t("p",[v._v("了解了IP地址和子网掩码，就可以进行子网划分了。子网划分在理论上是很容易理解的，但真正做划分前有许多相关问题需要分析清楚。子网划分主要考虑以下两个问题。")]),v._v(" "),t("ul",[t("li",[v._v("当前网络需要划分几个子网。")]),v._v(" "),t("li",[v._v("每个子网最多支持多少台主机。")])]),v._v(" "),t("p",[v._v("这两个问题中只要有一个无法完成，这次划分就是不可行的。同时子网划分也要考虑前面所说的特殊IP地址的影响，如从主机ID部分划分出一部分作为子网ID，只给主机ID留下一位，这时主机的地址要么为0要么为1，为0就是一个网络地址，为1就是一个广播地址，这都是不允许分配给主机的，所以主机ID最少要留2位。为了符合IP地址的规范，子网ID最少也要有两位，并且全0和全1的子网ID也不允许使用。")]),v._v(" "),t("p",[v._v("下面用一个具体的实例来说明子网划分的过程")]),v._v(" "),t("p",[v._v("例如，某个公司获得了一个C类网络地址201.100.100.0，该公司现有负责市场、生产和科研的3个部门，这3个部门要分属不同的子网，每个子网最多支持20台主机，现在要求规划出子网掩码和每个子网可用的IP地址。")]),v._v(" "),t("p",[v._v("根据前面所介绍的划分子网的两个条件来判断，首先，该公司申请到的是一个C类网络地址，如果不做划分的话，可以容纳254台主机。公司有3个部门，就至少需要3个子网，需要从主机ID部分划分出3位作为子网ID，可以获得6个子网，每个子网可以提供30个IP地址，所以两个条件都是满足的。这时可以得出子网掩码为255.255.255.224，然后来推算每个网络可以使用的IP地址。在推算每个网络可以使用的IP地址时，自然要考虑主机ID。按照前面所述的规则，分析过程如图所示。")]),v._v(" "),t("p",[t("img",{attrs:{src:"/images/network/ip_addr_f.jpeg",alt:"image"}})]),v._v(" "),t("p",[v._v("尽管子网划分便于对网络的管理，但是也应该注意，子网划分实际上要耗费一些IP地址。从上面的例子来看，当拿出3位主机ID作为子网ID时，原本可以获得8个子网，每个子网有30个可用IP地址。但是，按照子网划分的要求，全0和全1的子网ID不能使用。这就意味着有60个IP地址因为子网划分而不能分配。由此可见，子网划分同样有利有弊。")])])}),[],!1,null,null,null);_.default=i.exports}}]);