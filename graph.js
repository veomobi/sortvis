const graphVis = {
    htmlElement: document.querySelector("#graph"),
    data:[],
    render () {
        this.htmlElement.innerHTML = '';
        let graph = document.createElement("div");
        graph.className = "graph";
        this.data.forEach(
            element=>{
                let bar = this.createBar(element);
                graph.appendChild(bar);
            }
        )
        this.htmlElement.append(graph);
    },
    createBar (data) {
        let bar = document.createElement("div");
        bar.className = "bar";
        bar.style.height = `${data}px`;
        return bar;
    }
}