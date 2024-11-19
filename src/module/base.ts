import fetch from "node-fetch";
import { URLSearchParams, URL } from "url";

import { WhmcsSetupOptions } from "../interface/whmcs.setup.options";

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
            try {
                const res = await fetch(
                    this.options.apiUrl + "/includes/api.php",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                        body: new URLSearchParams(
                            options as Record<string, any>
                        ),
                    }
                );

                const data = (await res.json()) as {
                    result: "success" | "error";
                };

                if (data.result != "success") return reject(data);
                resolve(data);
            } catch (error) {
                reject(error);
            }
        });
    }
}
