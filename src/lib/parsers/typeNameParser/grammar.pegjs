// grammar for generic type name
{
  class TypeName{
      constructor(partialName,typeParams){
          this.partialTypeName=partialName;
          this.genericParams=typeParams;
      }
       get fullTypeName(){
          if(this.genericParams && this.genericParams.length){
            return `${this.partialTypeName}<${this.geneticTypeParam}>`
          }else{
            return this.partialTypeName
          }
        }
      get geneticTypeParam(){
          if(this.genericParams && this.genericParams.length){
              return this.genericParams.map(tp=>tp.fullTypeName).join();
          }else{
              return ""
          }
      }
      get composingTypes(){
          let ret=[this] ;
          if(this.genericParams && this.genericParams.length){                         
              this.genericParams.forEach(tp=> tp.composingTypes.forEach(t=>{
                  if(!ret.includes(t)){
                      ret.push(t)
                  }
              }) );
          }
          return ret;
      }
  }
}
TypeName = partial:Literal w? typeParams:GenericTypeList? w?
{
   return new TypeName(partial,typeParams);
}
GenericTypeList = "<" tp:TypeParams ">"{return tp} / "[" tp:TypeParams "]"{return tp}
TypesList = w? "," w? type:TypeName
{
  return type;
}
    
TypeParams = w? firstTypeParam:TypeName  w? typeList:TypesList* 
{
  if(firstTypeParam){
    let ret=[firstTypeParam];

    if(typeList){
      Array.prototype.push.apply(ret,typeList);
      }

    return ret;

  } else {
      return null;
  }
}
    
Literal = [A-Za-z0-9$_-]+
{
	return text();
}
    
w = [" "\t]*
