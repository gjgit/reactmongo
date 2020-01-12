const { ApolloServer} = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose')

const Post 

const {MONGODB} = require('./config.js')

const typeDefs = gql`
 type Query{
     sayHi: String!
 }
`

const resolvers = {
    Query:{
        sayHi:() =>'heloooeddddssrerroooo world'
    }
} 

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB,{useNewUrlParser:true})
        .then(()=>{
            console.log("mongoo connected")
            return server.listen({port: 5000})
        })
.then(res =>{
    console.log(`server runing @ ${res.url}`)
})