import React from "react";
import { useForm } from "react-hook-form";
const Form = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const onSubmit = (formdata) => console.log(formdata);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>


        {/* fullname */}
        <input type="text" placeholder="enter text" {...register("fullname",
          {
            required: true,
            minLength:
            {
              value: 8,
              message: "please enter a valid name",
            },
            pattern: {
              value: /^[a-zA-Z ]*& %$/,
              message: 'please enter a valid name',
            }
          })}
        />
        <br />
        <br />
        <p style={{ color: "red" }}>{errors.fullname?.message}</p>

        {/* dob */}
        DOB:<input type="date" placeholder='enter your Date Of Birth' {...register("dob",
          {
            required: {
              value: true,
              message: 'please enter your date of birth'
            },
            min: {
              value: "1990",
              message: 'date of birth should be >1900'
            },
            max: {
              value: "2024",
              message: 'date of birth should be <2022'
            }
          })} /><br /><br />
        <p style={{ color: 'red' }}>{errors.dob?.message}</p>

        {/* email */}
        Email:<input type="email" placeholder='enter your email address' {...register("email",
          {
            required: {
              value: true,
              message: 'please enter email address'
            },
            pattern: {
              value: /^:;{?(([^<>()[].s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,
              message: 'please enter valid email address'
            }
          }
        )} /><br /><br />
        <p style={{ color: 'red' }}>{errors.email?.message}</p>

        {/* phone number */}

        Phone no:<input type="number" placeholder='enter your phone number' {...register("phoneno",
          {
            required: {
              value: true,
              message: 'please enter phone number'
            },
            minLength: {
              value: 10,
              message: 'phone number must contain 10 digits'
            },
            maxLength: {
              value: 10,
              message: 'phone number must contain 10 digits'
            }
          })} /><br /><br />
        <p style={{ color: 'red' }}>{errors.phoneno?.message}</p>

        {/* address */}
        Address:<label>
          <textarea rows={4} cols={40} {...register("address",
            {
              required: {
                value: true,
                message: 'please enter your address'
              }
            }
          )} />
        </label>
        <p style={{ color: 'red' }}>{errors.address?.message}</p>

        {/* gender */}
        Gender:<input type="radio" name="gender" {...register("gender")} />Female
        <input type="radio" name="gender" {...register("gender")} />Male<br /><br />

        {/* hobbies */}

        <br />
        Hobbies: <input type="checkbox" name="singing"{...register("singing")} />Singing<br />
        <input type="checkbox" name="dancing" {...register("dancing")} />Dancing<br />
        <input type="checkbox" name="Playing"{...register("playing")} />Playing<br />
        <input type="checkbox" name="stories"{...register("stories")} />Reading stories<br />
        <input type="checkbox" name="music"{...register("music")} />Listening music<br /><br />

        {/* Major */}
        Major:<select>
          <option value="java" {...register("major")}>Java</option>
          <option value="dbms" {...register("major")}>DBMS</option>
          <option value="react" {...register("major")}>REACT</option>
        </select><br /><br />

        <button type="submit">submit</button>
      </form>
    </div>

  );
};
export default Form;