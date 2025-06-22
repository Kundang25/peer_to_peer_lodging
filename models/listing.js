const mongoose =require("mongoose");

const Schema = mongoose.Schema;

const listingSchema =new Schema({
    title: {type:String,required:true},
    description: {type:String,required:true},
    
    
    image: {
        filename: {
          type: String,
          default: "default",
          
        },
        url: {
          type: String,
          default: "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
          set: (v) =>
            !v || v.trim() === ""
              ? "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
              : v,
        }
      }
      ,
    
    price: {type:Number},
    location: {type:String},
    country:String
});
const Listing = mongoose.model("listing",listingSchema);
module.exports = Listing;  //export the model



// image: {
    //     type:String,
    //     default:
    //         "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfH",
    //     set: (v) =>
    //      v===""
    //      ? "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfH":v,
    // },


    // sahi wala :
    // image: {
    //     filename: String,
    //     url: {
    //         type: String,
    //         default: "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    //         set : (v) => v===" "? "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfH":v,

    //     }
    // },

// image: {
//         filename: String,
//         url: {
//             type: String,
//             default: "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
//             set : (v) => v==" "? "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfH":v,

//         }
//     },