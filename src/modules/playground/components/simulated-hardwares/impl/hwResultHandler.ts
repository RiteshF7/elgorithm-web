export abstract class HwResultHandler{
     abstract initComponent():void;
     abstract registerComponent(componentKey:String,callback: (data:any)=>void):void;
     abstract resetComponent():void
     abstract processResult():void
     abstract isOnDestination():boolean
     abstract processSuccess():void
     abstract processFailure():void
     abstract displayFailureMessage(message: String):void
     abstract displaySuccessMessage(message: String):void



    isCodeCompleted = (data:any)=>data.hasOwnProperty('completed')





}

const commonFun = {
     resetDisplay:()=>{}
}
