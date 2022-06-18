import people from "../data/dataset";

const Resolvers = {
    Query: {
        getAllZipCodes: () => people,
        getZipCode: (_: any, args: any) => {
            console.log(args);
            return people.find((person) => person.id === args.id);
        },
    },
};

export default Resolvers;
