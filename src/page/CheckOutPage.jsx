import {
  BillingText,
  Card,
  Cart,
  CartTitle,
  CheckOutBtn,
  CheckOuttext,
  CountBtn,
  CountWrap,
  ErrorAddress,
  ErrorBank,
  ErrorCity,
  ErrorEmail,
  ErrorName,
  ErrorPhoneNumber,
  ErrorZipCode,
  FlexDiv,
  Images,
  Input,
  InputDiv,
  Label,
  LabelDiv,
  Num,
  Price,
  Total,
  TotalPrice,
  TotalWrap,
  WhiteCard,
  WhiteCardContainer,
  Wrap,
  WraperMain,
} from "./CheckOutPageStyles";
import { useForm } from "react-hook-form";
import EndPoint from "../components/EndPoint";
import InputCountry from "../components/InputCountry";
import { UseAppContext } from "../context/AppContext";
import { useState } from "react";



function CheckOutPage() {
  const { cartState,cartDispatch } = UseAppContext();
  const [endPointVisible ,setEndPointVisible]=useState(false)
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  

  function SubmitHandler(values) {
    console.log("values", values);
    cartDispatch({type:"clearCart"})
    setEndPointVisible(true)
    
  }

  return (
    <FlexDiv onSubmit={handleSubmit(SubmitHandler)}>
      {endPointVisible && <EndPoint />}
      <Card>
        <CheckOuttext>CHECKOUT</CheckOuttext>
        <BillingText>Billing details</BillingText>
        <InputDiv>
          <LabelDiv>
            <Label>Name</Label>
            <Input
              placeholder="First Name"
              {...register("firstname", {
                required: "First Name cannot be empty",
              })}
              Error={errors.firstname}
            />

            {errors.firstname && (
              <ErrorName>{errors.firstname?.message}</ErrorName>
            )}
          </LabelDiv>
          <LabelDiv>
            <Label>Email Address</Label>
            <Input
              placeholder="Email Address"
              {...register("email", {
                required: "Email cannot be empty",
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: "Looks like this is not an email",
                },
              })}
              Error={errors.email}
            />

            {errors.email && <ErrorEmail>{errors.email?.message}</ErrorEmail>}
          </LabelDiv>
          <LabelDiv>
            <Label>Phone Number</Label>
            <Input
              placeholder="+1 202-555-0136"
              {...register("phonenumber", {
                required: "PhoneNumber cannot be empty",
              })}
              Error={errors.phonenumber}
            />

            {errors.phonenumber && (
              <ErrorPhoneNumber>{errors.phonenumber?.message}</ErrorPhoneNumber>
            )}
          </LabelDiv>
          <BillingText>SHIPPING INFO</BillingText>
          <LabelDiv>
            <Label>Your Address</Label>
            <Input
              placeholder="1137 Williams Avenue"
              {...register("address", {
                required: "Your Address cannot be empty",
              })}
              Error={errors.address}
            />

            {errors.address && (
              <ErrorAddress>{errors.address?.message}</ErrorAddress>
            )}
          </LabelDiv>
          <LabelDiv>
            <Label>ZIP Code</Label>
            <Input
              placeholder="10001"
              {...register("zipcode", {
                required: "Zip Code cannot be empty",
              })}
              Error={errors.zipcode}
            />

            {errors.zipcode && (
              <ErrorZipCode>{errors.zipcode.message}</ErrorZipCode>
            )}
          </LabelDiv>
          <LabelDiv>
            <Label>City</Label>
            <Input
              placeholder="New York"
              {...register("city", {
                required: "City cannot be empty",
              })}
              Error={errors.city}
            />

            {errors.city && <ErrorCity>{errors.city.message}</ErrorCity>}
          </LabelDiv>
          <LabelDiv>
            <Label>Country</Label>
            <InputCountry />
            <Input
              placeholder="United States"
              {...register("country", {
                required: "Country cannot be empty",
              })}
              Error={errors.country}
            />

            {/* {errors.country && (
              <ErrorCountry>{errors.country.message}</ErrorCountry>
            )} */}
          </LabelDiv>
          <BillingText>PAYMENT DETAILS</BillingText>
          <LabelDiv>
            <Label>Bank Name</Label>
            <Input
              placeholder="Tbc Bank"
              {...register("bankname", {
                required: "Bank Name cannot be empty",
              })}
              Error={errors.bankname}
            />

            {errors.bankname && (
              <ErrorBank>{errors.bankname.message}</ErrorBank>
            )}
          </LabelDiv>
        </InputDiv>
      </Card>
      <WhiteCardContainer>
      <WhiteCard>
        <Cart>SUMMARY</Cart>

        {cartState.cart.map((el) => (
          <>
            <WraperMain key={Math.random()}>
              <Images src={el.cartPhoto} alt="nofwsfw"></Images>
              <CountWrap>
                <Wrap>
                  <CartTitle>
                    {el.name.split("").length > 12
                      ? el.name.split("").splice(0, 4)
                      : el.name.split("").splice(0, 3)}
                  </CartTitle>
                  <Price>${(el.number * el.price).toLocaleString()}</Price>
                </Wrap>
                <CountBtn>
                  <Num>X{el.number}</Num>{" "}
                </CountBtn>
              </CountWrap>
            </WraperMain>
          </>
        ))}

        <TotalWrap>
          <Total>TOTAL</Total>
          <TotalPrice>${cartState.total.toLocaleString()}</TotalPrice>
        </TotalWrap>

        <CheckOutBtn>CONTINUE & PAY</CheckOutBtn>
      </WhiteCard>
      </WhiteCardContainer>
    </FlexDiv>
  );
}

export default CheckOutPage;
