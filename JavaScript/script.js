
var catog= [
    {
        "name" : "All",
    },
    {
        "name" : "Drama",
    },
    {
        "name" : "Comedy",
    },
    {
        "name" : "Action",
    },
    {
        "name" : "Islamic",
    },
    {
        "name" :"Nature",
    },
    {
        "name" : "Web Development",
    },
    {
        "name" : "Graphic Designing",
    },
    {
        "name" : "Gaming",
    },
    {
        "name" : "Pakistani Dramas",
    },
    {
        "name" : "Music",
    },
    {
        "name" : "Cartoon",
    },
]



var cat='';
for(var i=0; i<catog.length; i++){
    cat+=`<div class="sub_catogaries">
    <h6>${catog[i].name}</h6>
    </div>`
}
var main=`<div class="catogaries">${cat}</div>`
document.write(main);

var videos =[
    {
        "v_link" : "https://assets.mixkit.co/videos/preview/mixkit-fresh-apples-in-a-row-on-a-natural-background-42946-large.mp4",
        "v_name" : "Fresh apples in a row on a natural background",
        "v_pagename" : "Mixkit",
        "v_views" : "9.3M views . 5 Years ago",
    },
    {
        "v_link" : "https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-down-a-mountain-41576-large.mp4",
        "v_name" : "Going down a curved highway down a mountain",
        "v_pagename" : "Mixkit",
        "v_views" : "15.2M views . 2 Years ago",
    },
    {
        "v_link" : "https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4",
        "v_name" : "Forest stream in the sunlight",
        "v_pagename" : "Mixkit",
        "v_views" : "5.2M views . 1 Year ago",
    },


    {
        "v_link" : "https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4",
        "v_name" : "Stars in space",
        "v_pagename" : "Mixkit",
        "v_views" : "2M views . 1.5 Years ago",
    },


    {
        "v_link" : "https://assets.mixkit.co/videos/preview/mixkit-close-view-of-a-record-rotating-on-a-turntable-42921-large.mp4",
        "v_name" : "Close view of a record rotating on a turntable",
        "v_pagename" : "Mixkit",
        "v_views" : "1M views . 2 Years ago",
    },{
        "v_link" : "https://assets.mixkit.co/videos/preview/mixkit-texture-of-different-fruits-42959-large.mp4",
        "v_name" : "Texture of different fruits",
        "v_pagename" : "Mixkit",
        "v_views" : "7M views . 3 Years ago",
    },{
        "v_link" : "https://assets.mixkit.co/videos/preview/mixkit-very-close-shot-of-the-leaves-of-a-tree-wet-18310-large.mp4",
        "v_name" : "Very close shot of the leaves of a tree wet from the rain",
        "v_pagename" : "Mixkit",
        "v_views" : "22M views . 3 Years ago",
    },{
        "v_link" : "https://assets.mixkit.co/videos/preview/mixkit-woman-turning-off-her-alarm-clock-42897-large.mp4",
        "v_name" : "Woman turning off her alarm clock",
        "v_pagename" : "Mixkit",
        "v_views" : "22k views . 3 Months ago",
    },{
        "v_link" : "https://assets.mixkit.co/videos/preview/mixkit-people-pouring-a-warm-drink-around-a-campfire-513-large.mp4",
        "v_name" : "People pouring a warm drink around a campfire",
        "v_pagename" : "Mixkit",
        "v_views" : "11M views . 4.5 Years ago",
    },{
        "v_link" : "https://assets.mixkit.co/videos/preview/mixkit-lots-of-chips-and-dice-arranged-on-a-game-table-42931-large.mp4",
        "v_name" : "Lots of chips and dice arranged on a game table",
        "v_pagename" : "Mixkit",
        "v_views" : "55k views . 6 Months ago",
    },{
        "v_link" : "https://assets.mixkit.co/videos/preview/mixkit-stunning-sunset-seen-from-the-sea-4119-large.mp4",
        "v_name" : "Stunning sunset seen from the sea",
        "v_pagename" : "Mixkit",
        "v_views" : "6M views . 2 Years ago",
    },{
        "v_link" : "https://assets.mixkit.co/videos/preview/mixkit-white-sand-beach-and-palm-trees-1564-large.mp4",
        "v_name" : "White sand beach and palm trees",
        "v_pagename" : "Mixkit",
        "v_views" : "40M views . 6 Years ago",
    },


    {
        "v_link" : "https://assets.mixkit.co/videos/preview/mixkit-curvy-road-on-a-tree-covered-hill-41537-large.mp4",
        "v_name" : "Curvy road on a tree covered hill",
        "v_pagename" : "Mixkit",
        "v_views" : "1.7M views . 5 Months ago",
    },
    {
        "v_link" : "https://assets.mixkit.co/videos/preview/mixkit-waterfall-in-forest-2213-large.mp4",
        "v_name" : "Waterfall in forest",
        "v_pagename" : "Mixkit",
        "v_views" : "5M views . 11 Months ago",
    },
    {
        "v_link" : "https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-2408-large.mp4",
        "v_name" : "Clouds and blue sky",
        "v_pagename" : "Mixkit",
        "v_views" : "3.5M views . 3 Years ago",
    },
    {
        "v_link" : "https://assets.mixkit.co/videos/preview/mixkit-fireworks-illuminating-the-beach-sky-4157-large.mp4",
        "v_name" : "Fireworks illuminating the beach sky",
        "v_pagename" : "Mixkit",
        "v_views" : "50M views . 9 Years ago",
    },
]


var a='';
for(var j=0; j<videos.length; j++){
    a+=`<div class="video">
    <video src="${videos[j].v_link}" controls></video>
    <h4>${videos[j].v_name}</h4>    
    <h5>${videos[j].v_pagename}</h5>    
    <h5>${videos[j].v_views}</h5>    
</div>`
}

var box=`<div class="main_box">${a}</div>`
document.write(box);