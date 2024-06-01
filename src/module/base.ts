import got from "got";
import { WhmcsSetupOptions } from "../interface/whmcs.setup.options";

import FormData = require("form-data");

export abstract class BaseModule {
    constructor(private readonly options: WhmcsSetupOptions) {}

    protected async request(
        methodName: string,
        options?: Record<string, any>
    ): Promise<any> {
        options.identifier = this.options.identifier;
        options.secret = this.options.secret;
        options.accesskey = this.options.accesskey;
        options.action = methodName;
        options.responsetype = "json";

        return new Promise(async (resolve, reject) => {
            const res = await got(this.options.apiUrl + "/includes/api.php", {
                method: "post",
                form: options,
            });

            const data = JSON.parse(res.body);

            if (data.result != "success") return reject(data);
            resolve(data);
        });
    }
}
