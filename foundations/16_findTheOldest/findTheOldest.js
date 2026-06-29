const findTheOldest = function(people) {
    let peopleWithAges = people.map(p => {
        if("yearOfDeath" in p) p.age = p.yearOfDeath - p.yearOfBirth;
        else p.age = (new Date().getFullYear()) - p.yearOfBirth;
        
        return p;
    });

    peopleWithAges.sort((p1, p2) => p2.age - p1.age);

    return peopleWithAges[0];
};

// Do not edit below this line
module.exports = findTheOldest;
