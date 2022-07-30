// Toggle sidebar
const sidebar = document.querySelector('.sidebar');
const toggleSidebar = () => {
    sidebar.classList.toggle('off');
}

// Local Api Data
let data = {
    "_key": "topic:1053",
    "cid": null,
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop p",
    "globalTags": [],
    "lastposttime": 0,
    "learning_outcomes": [
        "learning outcome 1",
        "learning outcome 2",
        "learning outcome 3"
    ],
    "mainPid": 0,
    "postcount": 0,
    "pre_requisites": [
        "pre-requisites 1",
        "pre-requisites 2",
        "pre-requisites 3"
    ],
    "project_image": "https://media.giphy.com/media/l3vR85PnGsBwu1PFK/giphy.gif",
    "short_description": "",
    "slug": "1053/new-project",
    "start_time": 1653517339588,
    "status": "published",
    "tasks": [
        {
            "task_id": 6233,
            "task_title": "demo task",
            "task_description": "desc desc",
            "tools": [],
            "assets": [
                {
                    "asset_id": 6234,
                    "asset_title": "task heading 1",
                    "asset_description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a",
                    "asset_type": "display_asset",
                    "asset_content": "reflection",
                    "display_asset_url": "",
                    "display_asset_image": "",
                    "display_asset_video": "",
                    "display_asset_docs": "",
                    "display_tb_tid": null,
                    "display_tb_pid": null,
                    "display_eb_tid": null,
                    "display_eb_pid": null,
                    "display_asset_reflection": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop "
                },
                {
                    "asset_id": 6235,
                    "asset_title": "task heading 2",
                    "asset_description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
                    "asset_type": "input_asset",
                    "asset_content": "tb",
                    "display_asset_url": null,
                    "display_asset_image": null,
                    "display_asset_video": null,
                    "display_asset_docs": null,
                    "display_tb_tid": null,
                    "display_tb_pid": null,
                    "display_eb_tid": null,
                    "display_eb_pid": null,
                    "display_asset_reflection": null
                },
                {
                    "asset_id": 6236,
                    "asset_title": "task heading 3",
                    "asset_description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
                    "asset_type": "input_asset",
                    "asset_content": "reflection",
                    "display_asset_url": null,
                    "display_asset_image": null,
                    "display_asset_video": null,
                    "display_asset_docs": null,
                    "display_tb_tid": null,
                    "display_tb_pid": null,
                    "display_eb_tid": null,
                    "display_eb_pid": null,
                    "display_asset_reflection": null
                },
                {
                    "asset_id": 6237,
                    "asset_title": "task heading 4",
                    "asset_description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
                    "asset_type": "display_asset",
                    "asset_content": "other",
                    "display_asset_url": "",
                    "display_asset_image": "",
                    "display_asset_video": "",
                    "display_asset_docs": "https://drive.google.com/file/d/1Pxw83bTKE3KkOyYnwm1u6DSVjntSrNTp/preview?usp=sharing",
                    "display_tb_tid": null,
                    "display_tb_pid": null,
                    "display_eb_tid": null,
                    "display_eb_pid": null,
                    "display_asset_reflection": null
                },
                {
                    "asset_id": 6238,
                    "asset_title": "task heading 5",
                    "asset_description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
                    "asset_type": "display_asset",
                    "asset_content": "other",
                    "display_asset_url": "",
                    "display_asset_image": "https://media.giphy.com/media/IzjhI7ggjDlEnMxZMu/giphy.gif",
                    "display_asset_video": "",
                    "display_asset_docs": "",
                    "display_tb_tid": null,
                    "display_tb_pid": null,
                    "display_eb_tid": null,
                    "display_eb_pid": null,
                    "display_asset_reflection": null
                },
                {
                    "asset_id": 6239,
                    "asset_title": "task heading 6",
                    "asset_description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
                    "asset_type": "input_asset",
                    "asset_content": "article",
                    "display_asset_url": null,
                    "display_asset_image": null,
                    "display_asset_video": null,
                    "display_asset_docs": null,
                    "display_tb_tid": null,
                    "display_tb_pid": null,
                    "display_eb_tid": null,
                    "display_eb_pid": null,
                    "display_asset_reflection": null
                },
                {
                    "asset_id": 6240,
                    "asset_title": "task heading 7",
                    "asset_description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
                    "asset_type": "input_asset",
                    "asset_content": "eb",
                    "display_asset_url": null,
                    "display_asset_image": null,
                    "display_asset_video": null,
                    "display_asset_docs": null,
                    "display_tb_tid": null,
                    "display_tb_pid": null,
                    "display_eb_tid": null,
                    "display_eb_pid": null,
                    "display_asset_reflection": null
                },
                {
                    "asset_id": 6241,
                    "asset_title": "task heading 8",
                    "asset_description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
                    "asset_type": "display_asset",
                    "asset_content": "other",
                    "display_asset_url": "https://drive.google.com/file/d/1dBBYQsz2yt3vc4YMkRmVC3nuTBbq2GON/preview?usp=sharing",
                    "display_asset_image": "",
                    "display_asset_video": "",
                    "display_asset_docs": "",
                    "display_tb_tid": null,
                    "display_tb_pid": null,
                    "display_eb_tid": null,
                    "display_eb_pid": null,
                    "display_asset_reflection": null
                },
                {
                    "asset_id": 6242,
                    "asset_title": "task heading 9",
                    "asset_description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
                    "asset_type": "display_asset",
                    "asset_content": "other",
                    "display_asset_url": "",
                    "display_asset_image": "",
                    "display_asset_video": "https://www.youtube.com/embed/s8H0Sx7jy7c",
                    "display_asset_docs": "",
                    "display_tb_tid": null,
                    "display_tb_pid": null,
                    "display_eb_tid": null,
                    "display_eb_pid": null,
                    "display_asset_reflection": null
                }
            ]
        }
    ],
    "tid": 1053,
    "timestamp": 1653516431690,
    "title": "new Project",
    "tools": [],
    "type": "project",
    "uid": 100,
    "viewcount": 0
}

// Fetch Data and render 'Sidebar' component into DOM
const loadSidebar = () => {
    let html = '';
    let htmlArr = data.tasks.map((element, index) => {
        return `
         <li>
            <h4>
                <span class="sidebar__content__headingSno">${index + 1}</span>
                <span>${element.task_title}</span>
            </h4>
            <ul>
            ${element.assets.map((element, index) => {
            return `<li>
                    <a href="#${element.asset_title.replace(/\s+/g, '')}">${element.asset_title}</a>
                </li>`
        }).join('')
            }
            </ul>
        </li>`
    })
    htmlArr.forEach(element => {
        html += element
    });
    document.querySelector('.sidebar__content').innerHTML = html;
}
loadSidebar();


// Expend and Collapse Cards
const expand = (e) => {
    e.classList.toggle('off');
    e.parentElement.parentElement.querySelector('.main__content__card__content_aria').classList.toggle('off');
}

// Fetch data and render Cards
const loadCard = () => {
    let html = '';
    let htmlArr = data.tasks.map((element, index) => {
        return `
        <div class="main__content__card__wrapper">
        ${element.assets.map((element, index) => {
            return `
                <div class="main__content__card">
                    <div class="heading-bar" id="${element.asset_title.replace(/\s+/g, '')}">
                        ${element.asset_title}
                    </div>
                    <div class="main__content__card__content content-box">
                        <div class="main__content__card__content_aria">
                        ${element.asset_type === 'display_asset' && element.display_asset_reflection ?
                    `<p style="font-weight: 600; line-height: 22px;">${element.display_asset_reflection}</p>` : ''
                }
                        ${element.asset_type === 'display_asset' && element.display_asset_docs ?
                    `<iframe src="${element.display_asset_docs}" width="100%" height="800px" frameborder="0"></iframe>` : ''
                }
                        ${element.asset_type === 'display_asset' && element.display_asset_url ?
                    `<iframe src="${element.display_asset_url}" width="100%" frameborder="0"></iframe>` : ''
                }
                        ${element.asset_type === 'display_asset' && element.display_asset_image ?
                    `<img src="${element.display_asset_image}" height=100%" width="100%">` : ''
                }
                        ${element.asset_type === 'display_asset' && element.display_asset_video ?
                    `<div class="main__content__video"><iframe width="100%" height="100%" src="${element.display_asset_video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>` : ''
                }
                        ${element.asset_type === 'input_asset' ?
                    `<img src="./assets/img/input.png" width="100%" alt="input">` : ''
                }
                        </div>
                        <div class="more-content">
                            <img src="./assets/img/expand.svg" onclick="expand(this)" width="33" height="33" alt="">
                        </div>
                    </div>
                </div>`
        }).join('')}
        </div>
        `
    })
    htmlArr.forEach(element => {
        html += element
    });
    document.querySelector('.main__content_page').innerHTML = html;
}
loadCard();


// Next Button Disable if One Main page
// if (document.querySelector('.main__content_page').childElementCount <= 1) {
//     document.querySelector('.nxt__btn button').disabled = true;
// }
if(Array.from(document.querySelector('.main__content_page').children).length <= 1){
        document.querySelector('.nxt__btn button').disabled = true;

}
