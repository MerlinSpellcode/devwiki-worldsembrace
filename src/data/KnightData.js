import { StatsData } from "./StatsData"
const allstats = {StatsData}
export const KnightData = {
    name: "Knight",
    descMain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur purus lorem, id vehicula leo fringilla sit amet. Quisque nec augue purus.",
    descSec: "Aenean varius nec turpis quis ornare. Mauris molestie, arcu ac commodo suscipit, metus libero aliquet eros, in pharetra mauris augue ac mi. Integer mollis augue odio, vel aliquam neque porta et. Pellentesque ultricies dui velit, et scelerisque lacus pulvinar ac. Suspendisse mattis pellentesque purus, ac sollicitudin est varius non. Aliquam erat volutpat. Etiam at odio cursus, ornare orci porta, ultrices sapien. In vestibulum rhoncus odio, ut tempor neque ultrices sed. Vestibulum lobortis, ipsum sed semper auctor, nisi nunc auctor urna, vel rutrum lectus lacus ac ipsum. Sed feugiat nisl diam, a efficitur ante vestibulum quis. Donec at turpis non justo maximus rhoncus. In ac maximus tortor. Nam aliquet libero in ex tincidunt porta. Nullam egestas odio sed quam auctor sodales.",
    pros: [
        "Resistente",
        "Iniciador",
        "Fácil de Jogar"
    ],
    cons: [
        "Lento",
        "Baixo Dano"
    ],
    ref1: require("../images/classes/warrior/knight/ref1.png"),
    ref2: require("../images/classes/warrior/knight/ref2.jpg"),
    ref3: require("../images/classes/warrior/knight/ref3.jpg"),
    ref4: require("../images/classes/warrior/knight/ref4.jpg"),
    skills: [
        {
            id: 1,
            type:"empty"
        },
        {
            id: 2,
            type:"stats",
            name:allstats.StatsData.str.name,
            desc:allstats.StatsData.str.desc,
            icon:allstats.StatsData.str.icon,
        },
        {
            id: 3,
            type:"stats",
            name:allstats.StatsData.cons.name,
            desc:allstats.StatsData.cons.desc,
            icon:allstats.StatsData.cons.icon,
        },
        {
            id: 4,
            type:"stats",
            name:allstats.StatsData.dex.name,
            desc:allstats.StatsData.dex.desc,
            icon:allstats.StatsData.dex.icon,
        },
        {
            id: 5,
            type:"empty"
        },
        {
            id: 6,
            type:"passive",
            name:"Passive",
            desc:"passive",
            icon: require("../images/classes/warrior/knight/icons/p_regen.png")
        },
        {
            id: 7,
            type:"active",
            name:"Slash",
            desc:"Golpeia o inimigo com uma forte pancada utilizando o escudo, o atordoando por 1s",
            icon: require("../images/classes/warrior/knight/icons/slash.png"),
            gif: require("../images/classes/warrior/knight/gifs/bash.gif")
        },
        {
            id: 8,
            type:"passive",
            name:"Passive",
            desc:"passive",
            icon: require("../images/classes/warrior/knight/icons/p_mastery.png"),
        },
        {
            id: 9,
            type:"active",
            name:"Bash",
            desc:"Golpeia o inimigo com uma forte pancada utilizando o escudo, o atordoando por 1s",
            icon: require("../images/classes/warrior/knight/icons/shieldbash.png"),
            gif: require("../images/classes/warrior/knight/gifs/bash.gif")
        },
        {
            id: 10,
            type:"passive",
            name:"Passive",
            desc:"passive",
            icon: require("../images/classes/warrior/knight/icons/p_block.png"),
        },
        {
            id: 11,
            type:"empty"
        },
        {
            id: 12,
            type:"empty"
        },
        {
            id: 13,
            type:"stats",
            name:allstats.StatsData.str.name,
            desc:allstats.StatsData.str.desc,
            icon:allstats.StatsData.str.icon,
        },
        {
            id: 14,
            type:"empty"
        },
        {
            id: 15,
            type:"empty"
        },
        {
            id: 16,
            type:"active",
            name:"Ground Smash",
            desc:"Golpeia o inimigo com uma forte pancada utilizando o escudo, o atordoando por 1s",
            icon: require("../images/classes/warrior/knight/icons/groundsmash.png"),
            gif: require("../images/classes/warrior/knight/gifs/bash.gif")
        },
        {
            id: 17,
            type:"passive",
            name:"Passive",
            desc:"passive",
            icon: require("../images/classes/warrior/knight/icons/p_teamplay.png"),
        },
        {
            id: 18,
            type:"active",
            name:"Castle of Stone",
            desc:"Golpeia o inimigo com uma forte pancada utilizando o escudo, o atordoando por 1s",
            icon: require("../images/classes/warrior/knight/icons/castleofstone.png"),
            gif: require("../images/classes/warrior/knight/gifs/bash.gif")
        },
        {
            id: 19,
            type:"passive",
            name:"Passive",
            desc:"passive",
            icon: require("../images/classes/warrior/knight/icons/p_titanwalk.png")
        },
        {
            id: 20,
            type:"active",
            name:"Shield Rush",
            desc:"Golpeia o inimigo com uma forte pancada utilizando o escudo, o atordoando por 1s",
            icon: require("../images/classes/warrior/knight/icons/shieldrush.png"),
            gif: require("../images/classes/warrior/knight/gifs/bash.gif")
        },
        {
            id: 21,
            type:"empty"
        },
        {
            id: 23,
            type:"stats",
            name:allstats.StatsData.cons.name,
            desc:allstats.StatsData.cons.desc,
            icon:allstats.StatsData.cons.icon
        },
        {
            id: 22,
            type:"empty"
        },
        {
            id: 23,
            type:"stats",
            name:allstats.StatsData.cons.name,
            desc:allstats.StatsData.cons.desc,
            icon:allstats.StatsData.cons.icon
        },
        {
            id: 25,
            type:"empty"
        },
        {
            id: 26,
            type:"empty"
        },
        {
            id: 27,
            type:"active",
            name:"Assemble",
            desc:"Golpeia o inimigo com uma forte pancada utilizando o escudo, o atordoando por 1s",
            icon: require("../images/classes/warrior/knight/icons/assemble.png"),
            gif: require("../images/classes/warrior/knight/gifs/bash.gif")
        },
        {
            id: 28,
            type:"passive",
            name:"Passive",
            desc:"passive",
            icon: require("../images/classes/warrior/knight/icons/p_sturdy.png")
        },
        {
            id: 29,
            type:"active",
            name:"Hold!!!",
            desc:"Golpeia o inimigo com uma forte pancada utilizando o escudo, o atordoando por 1s",
            icon: require("../images/classes/warrior/knight/icons/hold.png"),
            gif: require("../images/classes/warrior/knight/gifs/bash.gif")
        },
        {
            id: 30,
            type:"empty"
        },
    ]

}