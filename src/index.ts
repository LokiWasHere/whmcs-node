import { WhmcsSetupOptions } from "./interface/whmcs.setup.options";
import { WhmcsAddonsService } from "./module/addons";
import { WhmcsAffiliatesService } from "./module/affiliates";
import { WhmcsAuthenticationService } from "./module/authentication";
import { WhmcsBillingService } from "./module/billing";
import { WhmcsClientService } from "./module/client";
import { WhmcsDomainsService } from "./module/domains";
import { WhmcsModuleService } from "./module/module";
import { WhmcsOrdersService } from "./module/orders";
import { WhmcsProductsService } from "./module/products";
import { WhmcsProjectManagementService } from "./module/project-management";
import { WhmcsServersService } from "./module/servers";
import { WhmcsServiceService } from "./module/service";
import { WhmcsSupportService } from "./module/support";
import { WhmcsSystemService } from "./module/system";
import { WhmcsTicketsService } from "./module/tickets";
import { WhmcsUsersService } from "./module/users";

export default class WhmcsApi {
    public addons: WhmcsAddonsService;
    public affiliates: WhmcsAffiliatesService;
    public authentication: WhmcsAuthenticationService;
    public billing: WhmcsBillingService;
    public client: WhmcsClientService;
    public domains: WhmcsDomainsService;
    public module: WhmcsModuleService;
    public orders: WhmcsOrdersService;
    public products: WhmcsProductsService;
    public projectmanagement: WhmcsProjectManagementService;
    public servers: WhmcsServersService;
    public service: WhmcsServiceService;
    public support: WhmcsSupportService;
    public system: WhmcsSystemService;
    public tickets: WhmcsTicketsService;
    public users: WhmcsUsersService;

    constructor(private readonly options: WhmcsSetupOptions) {
        this.addons = new WhmcsAddonsService(this.options);
        this.affiliates = new WhmcsAffiliatesService(this.options);
        this.authentication = new WhmcsAuthenticationService(this.options);
        this.billing = new WhmcsBillingService(this.options);
        this.client = new WhmcsClientService(this.options);
        this.domains = new WhmcsDomainsService(this.options);
        this.module = new WhmcsModuleService(this.options);
        this.orders = new WhmcsOrdersService(this.options);
        this.products = new WhmcsProductsService(this.options);
        this.projectmanagement = new WhmcsProjectManagementService(
            this.options
        );
        this.servers = new WhmcsServersService(this.options);
        this.service = new WhmcsServiceService(this.options);
        this.support = new WhmcsSupportService(this.options);
        this.system = new WhmcsSystemService(this.options);
        this.tickets = new WhmcsTicketsService(this.options);
        this.users = new WhmcsUsersService(this.options);
    }
}
