REST API 是以资源来作为URL的一部份的，post put delete get

URL	verb	functionality
notes/10	GET	fetches a single resource
notes	GET	fetches all resources in the collection
notes	POST	creates a new resource based on the request data
notes/10	DELETE	removes the identified resource
notes/10	PUT	replaces the entire identified resource with the request data
notes/10	PATCH	replaces a part of the identified resource with the request data

DELETE 204

mongoose
在使用的时候，需要加上 scheme 来对数据范式进行定义

```
const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'HTML is Easy',
  date: new Date(),
  important: false,
})

note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})

Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})
```




