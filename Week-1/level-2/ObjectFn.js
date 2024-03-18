function objectFns(obj) {
  console.log("Whole object is :" + obj);

  let keys = Object.keys(obj); // will give you an array of keys
  console.log("Keys : " + keys);

  let values = Object.values(obj);
  console.log("vales are :" + values);
}

const objj = {
  key1: "hello1",
  key2: "hello2",
  key3: "hello3",
};

const newObjj = Object.entries({}, objj, { key4: "hello4" });
