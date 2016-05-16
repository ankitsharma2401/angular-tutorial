export class DataService{
    private data=['Milk','Sugar','Bread'];

getRandomData(){
    return this.data[Math.floor(Math.random()*this.data.length)];   
}
insertData(data:string){
    this.data.push(data);
}

}
