// tslint:disable-next-line:no-var-requires
require("dotenv").config();
import { getMockedZipCodeInfo, getZipCodeInfo } from "../zippopotam/service/zippopotam.service";

const Resolvers = {
    Query: {
        getZipCodeInfo: async (_: any, args: any) => {
            console.log(args);
            if ((process.env.USE_MOCK_DATA ?? "false").toLowerCase() === "true") {
                return getMockedZipCodeInfo(args.countryCode, args.zipCode);
            } else {
                return getZipCodeInfo(args.countryCode, args.zipCode);
            }
        },
    },
};

export default Resolvers;
