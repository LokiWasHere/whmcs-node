import got from "got";
import { WhmcsSetupOptions } from "../interface/whmcs.setup.options";

import FormData = require("form-data");

export abstract class BaseModule {
    constructor(private readonly options: WhmcsSetupOptions) {}

    protected async request(
        methodName: string,
        options?: Record<string, any>
    ): Promise<any> {
        const form = new FormData();

        form.append("identifier", this.options.identifier);
        form.append("secret", this.options.secret);
        form.append("accesskey", this.options.accesskey);
        form.append("action", methodName);
        form.append("responsetype", "json");

        Object.entries(options).forEach(([value, index]) => {
            form.append(index, value);
        });

        return new Promise(async (resolve, reject) => {
            const res = await got(this.options.apiUrl + "/includes/api.php", {
                method: "post",
                form,
            });

            const data = JSON.parse(res.body);

            if (data.result != "success") return reject(data);
            resolve(data);
        });
    }
}
