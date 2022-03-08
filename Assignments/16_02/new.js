
let category = ["movie", "news", "education", "sports", "politics"];
let age = ["teenager", "adult"];
let final_list = [];

let a, b, c;
for (let i = 0; i < 100; i++) {
    a = parseInt(Math.abs(Math.random() * 10 - 5));
    b = parseInt(Math.random() * 2);
    c = Math.floor(Math.random() * 100)
    final_list.push({ category: category[a], age: age[b], visitors: c })
}
console.log(final_list);

let mv = 0, ma = 0, nt = 0, na = 0, et = 0, ea = 0, st = 0, sa = 0, pt = 0, pa = 0;
let total = 0;

for (let i = 0; i < 100; i++) {
    if (final_list[i].category == "movie" && final_list[i].age == "teenager") {
        mv += 1;
    }
    else if (final_list[i].category == "movie" && final_list[i].age == "adult") {
        ma++;
    }
    if (final_list[i].category == "news" && final_list[i].age == "teenager") {
        nt++;
    }
    else if (final_list[i].category == "news" && final_list[i].age == "adult") {
        na++;
    }
    if (final_list[i].category == "education" && final_list[i].age == "teenager") {
        et++;
    }
    else if (final_list[i].category == "education" && final_list[i].age == "adult") {
        ea++;
    }
    if (final_list[i].category == "sports" && final_list[i].age == "teenager") {
        st++;
    }
    else if (final_list[i].category == "sports" && final_list[i].age == "adult") {
        sa++;
    }
    if (final_list[i].category == "politics" && final_list[i].age == "teenager") {
        pt++;
    }
    else if (final_list[i].category == "politics" && final_list[i].age == "adult") {
        pa++;
    }
}
total = mv + ma + nt + na + et + ea + st + sa + pt + pa;
console.log(total)
array = {
    movie: [parseInt((mv / total) * 100) +"%", parseInt((ma / total) * 100)+"%"],
    news: [parseInt((nt / total) * 100)+"%", parseInt((na / total) * 100)+"%"],
    education: [parseInt((et / total)* 100)+"%", parseInt((ea / total) * 100)+"%"],
    sports: [parseInt((st / total) * 100)+"%", parseInt((sa / total) * 100)+"%"],
    politics: [parseInt((pt / total) * 100)+"%", parseInt((pa / total) * 100)+"%"]
}
console.log(array);