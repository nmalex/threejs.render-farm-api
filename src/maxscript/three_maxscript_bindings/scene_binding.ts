import { injectable } from "inversify";
import { ISceneObjectBinding, IMaxscriptClient, ISceneObjectBindingFactory } from "../../interfaces";

@injectable()
export class SceneBindingFactory implements ISceneObjectBindingFactory {
    public get SrcType(): string { return SceneBinding.SrcType }
    public get DstType(): string { return SceneBinding.DstType }

    public Create(maxscriptClient: IMaxscriptClient, objectJson: any): ISceneObjectBinding
    {
        return new SceneBinding(objectJson, maxscriptClient);
    }
}

export class SceneBinding implements ISceneObjectBinding {
    private _objectJson: any;
    private _maxName: string;

    public static SrcType: string = "Scene";
    public static DstType: string = "Dummy";

    public constructor(objectJson: any, maxscriptClient: IMaxscriptClient) {
        this._objectJson = objectJson;
    }

    // implemenation of ISceneObjectBinding
    public async Get(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public async Post(): Promise<string> {
        console.log(" >> SceneBinding takes json, and sends it to remote maxscript");
        return JSON.stringify(this._objectJson);
    }

    public async Put(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public async Delete(): Promise<any> {
        throw new Error("Method not implemented.");
    }
}
