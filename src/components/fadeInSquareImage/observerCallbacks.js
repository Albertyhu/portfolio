
const leftCallback = (entry) => {
    if (entry[0].isIntersecting) {
        if (entry[0].target.classList.contains("opacity-0")) {
            entry[0].target.classList.remove("opacity-0")
        }
        if (entry[0].target.classList.contains("translate-x-[-300px]")) {
            entry[0].target.classList.remove("translate-x-[-300px]")
        }
    }
    else {
        if (!entry[0].target.classList.contains("opacity-0")) {
            entry[0].target.classList.add("opacity-0")
        }
        if (!entry[0].target.classList.contains("translate-x-[-300px]")) {
            entry[0].target.classList.add("translate-x-[-300px]")
        }
    }
}

const rightCallback = (entry) => {
    if (entry[0].isIntersecting) {
        if (entry[0].target.classList.contains("opacity-0")) {
            entry[0].target.classList.remove("opacity-0")
        }
        if (entry[0].target.classList.contains("translate-x-[300px]")) {
            entry[0].target.classList.remove("translate-x-[300px]")
        }
    }
    else {
        if (!entry[0].target.classList.contains("opacity-0")) {
            entry[0].target.classList.add("opacity-0")
        }
        if (!entry[0].target.classList.contains("translate-x-[300px]")) {
            entry[0].target.classList.add("translate-x-[300px]")
        }
    }
}

const rotateUpCallback = entry => {
    if (entry[0].isIntersecting) {
        for (var i = 0; i < entry[0].target.children.length; i++) {
            if (entry[0].target.children[i].classList.contains("RotateOut")) {
                entry[0].target.children[i].classList.remove("RotateOut")
            }
        }
    }
    else {
        for (var i = 0; i < entry[0].target.children.length; i++) {
            if (!entry[0].target.children[i].classList.contains("RotateOut")) {
                entry[0].target.children[i].classList.add("RotateOut")
            }
        }
    }
}

const FadeUpCallback = entry => {
    if (entry[0].isIntersecting) {
        for (var i = 0; i < entry[0].target.children.length; i++) {
            if (entry[0].target.children[i].classList.contains("opacity-0")) {
                entry[0].target.children[i].classList.remove("opacity-0");
            }
            if (entry[0].target.children[i].classList.contains("translate-y-[200px]")) {
                entry[0].target.children[i].classList.remove("translate-y-[200px]");
            }
        }

    }
    else {
        for (var i = 0; i < entry[0].target.children.length; i++) {
            if (!entry[0].target.children[i].classList.contains("opacity-0")) {
                entry[0].target.children[i].classList.add("opacity-0");
            }
        
        if (!entry[0].target.children[i].classList.contains("translate-y-[200px]")) {
            entry[0].target.children[i].classList.add("translate-y-[200px]");
            }
        }
    }
}


export {
    leftCallback,
    rightCallback,
    rotateUpCallback, 
    FadeUpCallback,
}