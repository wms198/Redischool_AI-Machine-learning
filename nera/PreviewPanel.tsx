=======
const onHoverPreview = (frame: HTMLIFrameElement) => {
    if (frame.contentWindow === null || frame.contentDocument === null ) return

    const overlay = document.createElement("div");
    overlay.style.position = "absolute";
    overlay.style.backgroundColor = "rgba(121,25,250, 0.3)";
    overlay.style.outline = "2px solid rgba(121,25,250, 1)";
    overlay.style.pointerEvents = "none"; // don’t block clicks
    overlay.style.zIndex = '999999'; 
    frame.contentDocument.body.appendChild(overlay);

    frame.contentWindow.document.addEventListener("mousemove", (e) => {
        let el = e.target as HTMLElement | null;

        while (el && !el.hasAttribute("data-nera-id") ) {
            el = el.parentElement;
        }

        if (el && frame.contentWindow !== null) {
            const rect = el.getBoundingClientRect();
            overlay.style.left = rect.left + frame.contentWindow.scrollX + "px";
            overlay.style.top = rect.top + frame.contentWindow.scrollY + "px";
            overlay.style.width = rect.width + "px";
            overlay.style.height = rect.height + "px";
            overlay.style.display = "block";
        } else {
            overlay.style.display = "none";
        }
    });

    // var cells = frame.contentWindow.document.body.querySelectorAll('[data-nera-id]'); //[data-nera-id]
    // console.log("before loop", cells);
    // for (var i = 0; i < cells.length; i++) {
    //     console.log("foo", cells[i])
    //     const node = cells[i];
    //     node.addEventListener("mouseover", function() {
    //         //console.log("enter", node)
    //         node.classList.add('nera-highlight')
    //     });
    //     node.addEventListener("mouseout", function() {
    //         //console.log("out", node)
    //         node.classList.remove('nera-highlight')
    //     });
    // }
}
// const highlightCSS = `cursor: pointer;`

// const highlightCSS = `
// .nera-highlight {
//     background: none;
//     .nera-highlight {
//         cursor: pointer;
//         color: B0C4DE !important;
//         background: red;
//     }
// }
// `
>>>>>>> develop


onLoad={()=>{setIsIframeLoading(false);}}