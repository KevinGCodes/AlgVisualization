class BarCanvas{
    elements=[]
    size;
    canvasList = [];
    maxHeight;

    constructor(n, maxHeight){
        this.maxHeight = maxHeight;
        this.size = n;
        this.randomize();
    }


    randomize(){
        this.elements = [];
        for(let i = 0; i < this.size; i++){
            this.elements.push(Math.random()*this.maxHeight);
        }
    }
}