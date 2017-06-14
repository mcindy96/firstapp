Template.showpeople.helpers({
  peoplelist() {return People.find()},
})

Template.addperson.events({
  'click button'(elt,instance){
    const name = instance.$('#name').val();//the $ restricts the name to just that template
    const year = instance.$('#birthyear').val();
    const birthyear = parseInt(year);
    console.log('adding' +name);
    instance.$('#name').val(""); //erase textbox after reading
    instance.$('#birthyear').val(""); //erase after reading
    People.insert({name:name,birthyear:birthyear})
    //shorter version: People.insert({name,birthyear})
  }
})

/* When you click on button that's inside the template personrow...
*/
Template.personrow.events({
  'click span'(elt,instance) {
    console.dir(this); //show you what the object is at the time this line is called. Can look inside object.
    console.log(this.person._id); //Print the word, don't let you look inside
    People.remove(this.person._id);
  }
})
