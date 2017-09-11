var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

// ********* List everyone and for each of them, list the names of who they follow and who follows them
function whoFollowsWho(){
  var datas = {};
  for (var key in data){
    datas[data[key].name] = {};
    datas[data[key].name].follows = [];
    datas[data[key].name].followed = [];
    for (var i = 0; i < data[key].follows.length; i++){
      datas[data[key].name].follows.push(data[data[key].follows[i]].name);
    }
  }
  for (var name in datas){
    for (var c = 0; c < datas[name].follows.length; c++){
      datas[datas[name].follows[c]].followed.push(name);
    }
  }
  return datas;
}
// console.log(whoFollowsWho());

// *********** Identify who follows the most people

function followsMost(){
  var datas = whoFollowsWho();
  var mostFollow = 0;
  var creep = '';
  for (var name in datas){
    if(mostFollow < datas[name].follows.length){
      mostFollow = datas[name].follows.length;
      creep = name;
    }
  }
  return creep;
}
// console.log(followsMost());

// ********* Identify who has the most followers

function mostFollowers(){
  var datas = whoFollowsWho();
  var mostFollowed = 0;
  var popular = '';
  for (var name in datas){
    if(mostFollowed < datas[name].followed.length){
      mostFollow = datas[name].followed.length;
      popular = name;
    }
  }
  return popular;
}
// console.log(mostFollowers());

// ********* Identify who has the most followers over 30

function mostFollowerOver30(){
  var datas = whoFollowsWho();
  for (var key in data){
    datas[data[key].name].age = data[key].age;
  }
  var mostFollowed = 0;
  var popular = '';
  for (var name in datas){
    if(datas[name].age > 30 && mostFollowed < datas[name].followed.length){
      mostFollow = datas[name].followed.length;
      popular = name;
    }
  }
  return popular;
}
// console.log(mostFollowerOver30());

// ******** Identify who follows the most people over 30

function followMostOVer30(){
  var datas = whoFollowsWho();
  for (var key in data){
    datas[data[key].name].age = data[key].age;
  }
  var mostFollow = 0;
  var creep = '';
  for (var name in datas){
    if(datas[name].age > 30 && mostFollow < datas[name].follows.length){
      mostFollow = datas[name].follows.length;
      creep = name;
    }
  }
  return creep;
}
// console.log(followMostOVer30());

// ******* List those who follow someone that doesn't follow them back

function notFollowBack(){
  var datas = whoFollowsWho();
  var list = [];
  for(var name in datas){
    for(var i = 0; i < datas[name].follows.length; i++){
      if(datas[name].followed.indexOf(datas[name].follows[i]) === -1){ 
        list.push(name);
        break;
      }
    }
  }
  return list;
}
// console.log(notFollowBack());

// ******** List everyone and their reach (sum of # of followers and # of followers of followers)

function peopleReach(){
  var datas = whoFollowsWho();
  var sumDatas = {};
  for (var person in datas){
    var sum = datas[person].followed.length;
    for (var i = 0; i < datas[person].followed.length; i++){
      sum += datas[datas[person].followed[i]].followed.length;
    }
    sumDatas[person] = sum;
  }
  return sumDatas;
}
console.log(peopleReach());