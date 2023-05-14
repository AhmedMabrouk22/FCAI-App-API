let Course = [
    {
        "id" : "CS102",
        "name" : "Computer Intoduction",
        "prerequisite" : [],
        "Department" : ""
    },
    {
        "id" : "CS101",
        "name" : "Fundamentals of Programming",
        "prerequisite" : ["Computer Intoduction"],
        "Department" : ""
    },
    {
        "id" : "CS201",
        "name" : "Computer Programming - 1",
        "prerequisite" : ["Fundamentals of Programming"],
        "Department" : ""
    }
]

export default Course;