

export default {
  // generateURL(tableName, operation, query) {
  //   let url = `http://localhost:8080/${tableName}/${operation}`;
  //   if (query) {
  //     url += (Object.keys(query).reduce((prev, cur) => {
  //       if(query[cur]!=='')
  //         prev += cur + "=" + query[cur] + '&';
  //       return prev;
  //     }, "?"));
  //     url = url.slice(0, url.length - 1);
  //   }
  //   return url;
  // },
  // getData(instance,url) {
  //   //get方式获取数据
  //   //由于then外层的代码会先执行，因此会返回undefined，
  //   // 所以直接返回promise对象，在组件中操作
  //   let result;
  //   return instance.$http.get(url);
  // },
  // postData(instance,url,formData) {
  //   //post方式获取数据
  //   //返回promise对象
  //   let result;
  //   return instance.$http.post(url,formData,{emulateJSON:true});
  // },
  // initQuery(model){
  //   //初始化查询表单对象
  //   return Object.keys(model).reduce((prev,cur)=>{
  //     if(cur.indexOf("Password")===-1)
  //       prev[cur] = "";
  //     return prev;
  //   },{});
  // },
  // search(instance,tableName,query){
  //   let url = this.generateURL(tableName,"findByQuery",query);
  //   return this.getData(instance,url);
  // },
  parseJSONArray(array){
    return array.map((item)=>{
      return Object.keys(item).reduce((pre,cur)=>{
        pre[cur] = item[cur];
        return pre;
      },{});
      // let c = {};
      // for(var key in cur){
      //   c[key] = cur[key];
      // }
      // return c;
    });
  }
}
