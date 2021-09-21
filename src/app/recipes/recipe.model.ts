export class Recipe {
    public recipe_name : string;
    public description : string;
    public imagepath : string;
    constructor(name:string,desc:string,path:string){
            this.recipe_name=name;
            this.description=desc;
            this.imagepath=path;
    }
}