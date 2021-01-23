class meme{
    id;
    name;
    image;
    dateModified;
    constructor(id, name, image,dateModified){
        this.id=id;
        this.name=name;
        this.image=image;
        this.dateModified=dateModified;
    }
    show(){
        let img=document.getElementById("img-change");
        let name=document.getElementById("name");
        let date=document.getElementById("date");
        img.src=this.image;
        name.innerHTML=this.name;
        date.innerHTML=this.dateModified;
    } //: hiển thị ra màn hình dạng html của meme đó bao gồm: name, image, dateModified
    update(data){
        this.id=data.id;
        this.image=data.image;
        this.dateModified=data.dateModified;
        this.name=data.name;
    } //: thay đổi thông tin của meme với data là 1 object truyền vào
}

class memeColection{
    id;
    name;
    owner;
    memes=[];
    constructor(id,name,owner){
        this.id=id;
        this.name=name;
        this.owner=owner;
    }
    add(meme){
        this.memes.push(meme);
    }
    update(id,data){
        for (let i = 0; i < this.memes.length; i++) {
            if (this.memes[i].id==id) {
                this.memes[i]=data;
            }            
        }
    }
    delete(id){
        for (let i = 0; i < this.memes.length; i++) {
            if (this.memes[i].id==id) {
                this.memes.splice(i,1);
            }            
        }
    }
    show(){
        console.log(this);
    }
}
//create new meme and show it on the screen
let new_meme=new meme(1,'Meme 1','https://media.sproutsocial.com/uploads/meme-example.jpg','23-1-2021');
new_meme.show();
let id=1;
function update() {
    //update that meme and show it again
    let nameUpdate=document.getElementById("name-update");
    let linkUpate=document.getElementById("link-update");
    let dateUpdate=document.getElementById("date-update");
    id++;
    let data = new meme(id, nameUpdate.value,linkUpate.value,dateUpdate.value)
    new_meme.update(data);
    new_meme.show();    
}

//create a colection
let new_meme1 = new meme(2, 'Meme 2', 'https://media.sproutsocial.com/uploads/meme-example.jpg', '24-1-2021');
let new_colection = new memeColection(1, 'dd', 'Hoa');

//add
new_colection.add(new_meme);
new_colection.add(new_meme1);

//update
let update_meme = new meme(1, 'meme_update', 'https://static.mommypoppins.com/styles/image620x420/s3/school_meme_3_0.jpg', '24-1-2021')
new_colection.update(1, update_meme);

//delete
new_colection.delete(1)
new_colection.show();