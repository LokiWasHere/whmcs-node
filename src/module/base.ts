import { WhmcsSetupOptions } from "../interface/whmcs.setup.options";

export abstract class BaseModule {
    constructor(private readonly options: WhmcsSetupOptions) {}

    protected async request(
        methodName: string,
        options: Record<string, any> = {}
    ): Promise<any> {
        options.identifier = this.options.identifier;
        options.secret = this.options.secret;
        options.accesskey = this.options.accesskey;
        options.action = methodName;
        options.responsetype = "json";

        const body = new URLSearchParams(options);

        return new Promise(async (resolve, reject) => {
            const res = await fetch(this.options.apiUrl + "/includes/api.php", {
                method: "post",
                body,
            });

            const data = await res.json();

            if (data.result != "success") return reject(data);
            resolve(data);
        });
    }
}
