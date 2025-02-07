import { defineField, defineType } from "sanity";


export  const blog = defineType(
    {
        name:"blogposts",
        type:"document",
        title:"Blogs",
        fields:[
            defineField({
                name:"category",
                title:"Category",
                type:"reference",
                to:[{
                    type:"category"
                }]
            }),
            defineField({
                name: "slug",
                title: "Slug",
                validation: (rule) => rule.required(),
                type: "slug"
            }),
            defineField(
                {
                    name:"image",
                    type:"image",
                    title:"Image"
                }),
           defineField(
            {
                name:"title",
                type:"string",
                title:"Title"
            }),
            defineField(
                {
                    name:"description",
                    type:"string",
                    title:"Description"
                }),
                        defineField(
                            {
                                name:"Publisheddate",
                                type:"date",
                                title:"Published Date"
                            }),
                           
        ]
    }
)