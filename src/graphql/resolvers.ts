// tslint:disable-next-line:no-var-requires
require("dotenv").config();
import { getMockedZipCodeInfo, getZipCodeInfo } from "../zippopotam/service/zippopotam.service";

const Resolvers = {
    Query: {
        getZipCodeInfo: async (_: any, args: any) => {
            if ((process.env.USE_MOCK_DATA ?? "false").toLowerCase() === "true") {
                return getMockedZipCodeInfo(args.countryCode, args.postalCode);
            } else {
                return getZipCodeInfo(args.countryCode, args.postalCode);
            }
        },
    },
};

export default Resolvers;
