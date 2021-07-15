import { v4 as uuidv4 } from "uuid";
export const INIT_DATA = {
    pathwayId: "123432",
    sections: [
        {
            sectionId: "one",
            contents: [
                {
                    id: uuidv4(),
                    text: "first of first"
                },
                {
                    id: uuidv4(),
                    text: "second of first"
                },
                {
                    id: uuidv4(),
                    text: "third of first"
                },
                {
                    id: uuidv4(),
                    text: "fourth of first"
                }
            ]
        },
        {
            sectionId: "two",
            contents: [
                {
                    id: uuidv4(),
                    text: "first of second"
                },
                {
                    id: uuidv4(),
                    text: "second of second"
                },
                {
                    id: uuidv4(),
                    text: "third of second"
                },
                {
                    id: uuidv4(),
                    text: "fourth of second"
                }
            ]
        },
        {
            sectionId: "three",
            contents: [
                {
                    id: uuidv4(),
                    text: "first of third"
                },
                {
                    id: uuidv4(),
                    text: "second of third"
                },
                {
                    id: uuidv4(),
                    text: "third of third"
                },
                {
                    id: uuidv4(),
                    text: "fourth of third"
                }
            ]
        }
    ]
};
