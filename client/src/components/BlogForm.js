import React, { useState, } from "react"
import axios from "axios"
import { Form, } from "semantic-ui-react"

const BlogForm = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/blogs", { title, body, })
      .then( res => {
        props.add(res.data);
        props.toggleForm();
      })
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input 
          label="Title"
          placeholder="Title"
          name="title"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <Form.Input 
          label="Body"
          placeholder="Body"
          name="body"
          required
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
      </Form.Group>
      <Form.Button>Submit</Form.Button>
    </Form>
  )

};

// class BlogForm extends React.Component {
//   state = { title: "", body: "", };
  
//   handleChange = (e, {name, value,}) => {
//     this.setState({ [name]: value, });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post("/api/blogs", { ...this.state, })
//       .then( res => {
//         this.props.add(res.data);
//         this.props.toggleForm();
//       })
//   };

//   render() {
//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <Form.Group widths="equal">
//           <Form.Input 
//             label="Title"
//             placeholder="Title"
//             name="title"
//             required
//             onChange={this.handleChange}
//             value={this.state.title}
//           />
//           <Form.Input 
//             label="Body"
//             placeholder="Body"
//             name="body"
//             required
//             onChange={this.handleChange}
//             value={this.state.body}
//           />
//         </Form.Group>
//         <Form.Button>Submit</Form.Button>
//       </Form>
//     )
//   }
// }

export default BlogForm;