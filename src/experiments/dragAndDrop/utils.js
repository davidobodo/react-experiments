import { v4 as uuidv4 } from "uuid";
export const INIT_DATA = {
    pathwayId: "123432",
    sections: [
        {
            sectionId: "one",
            contents: [
                {
                    id: "1-1",
                    text: "first of first"
                },
                {
                    id: "1-2",
                    text: "second of first"
                },
                {
                    id: "1-3",
                    text: "third of first"
                },
                {
                    id: "1-4",
                    text: "fourth of first"
                }
            ]
        },
        {
            sectionId: "two",
            contents: [
                {
                    id: "2-1",
                    text: "first of second"
                },
                {
                    id: "2-2",
                    text: "second of second"
                },
                {
                    id: "2-3",
                    text: "third of second"
                },
                {
                    id: "2-4",
                    text: "fourth of second"
                }
            ]
        },
        {
            sectionId: "three",
            contents: [
                {
                    id: "3-1",
                    text: "first of third"
                },
                {
                    id: "3-2",
                    text: "second of third"
                },
                {
                    id: "3-3",
                    text: "third of third"
                },
                {
                    id: "3-4",
                    text: "fourth of third"
                }
            ]
        }
    ]
};
