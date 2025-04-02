import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: { 
      type: String, 
      required: true 
    },
    lastName: { 
      type: String, 
      required: true 
    },
    email: { 
      type: String, 
      required: true, 
      unique: true 
    },
    password: { 
      type: String, 
      required: true 
    },
    userName: { 
      type: String, 
      unique: true 
    },
    preference: { 
      type: String, 
      default: "Not set"  
    },
    availability: [
      {
        day: { 
          type: String,
          enum: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          required: true
        },
        timeSlots: [
          {
            startTime: { type: String, required: true }, 
            endTime: { type: String, required: true }  
          }
        ]
      }
    ],
    events: [
      {
        eventId: { 
          type: mongoose.Schema.Types.ObjectId,  
          ref: "Event" 
        },
        status: { 
          type: String, 
          enum: ["pending", "accepted", "rejected"], 
          default: "pending" 
        }
      }
    ]
  },
  { 
    timestamps: true 
  }
);

const User = mongoose.model("User", UserSchema);

export default User;
