import React, { useState } from "react";
import Button from "../button/button";
import "./dropdown.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/authProvider";

const Dropdown = ({ dropdownStyle = "",method,value }) => {
  const navigate = useNavigate();
  const { signedInEmail } = useAuth();
  const { signOut } = useAuth();
  const userName = signedInEmail.split("")[0];
  const handleSignOut = () => {
    localStorage.setItem("token",undefined)
    method(!value)
    navigate("/")
  };
  const dropdownCollection = (
    <div className="collection-dropdown flex-row gap-lg align-left">
      <div className="collection-titles flex-col gap-xs align-left">
        <Button
          text="all"
          btnStyle="underline-btn collection-title main-title"
          textStyle="btn-text"
        />
      </div>
      <div className="collection-titles flex-col gap-xs align-left">
        <Button
          text="skin care"
          btnStyle="underline-btn collection-title main-title"
          textStyle="btn-text"
        />
        <div className="sub-titles flex-col gap-2xs align-left">
          <Button
            text="facial cleanser"
            btnStyle="underline-btn collection-title sub-title"
            textStyle="btn-text-lgt"
          />
          <Button
            text="sunscreen cream"
            btnStyle="underline-btn collection-title sub-title"
            textStyle="btn-text-lgt"
          />
          <Button
            text="moisturizer"
            btnStyle="underline-btn collection-title sub-title"
            textStyle="btn-text-lgt"
          />
          <Button
            text="makeup remover"
            btnStyle="underline-btn collection-title sub-title"
            textStyle="btn-text-lgt"
          />
          <Button
            text="mask"
            btnStyle="underline-btn collection-title sub-title"
            textStyle="btn-text-lgt"
          />
        </div>
      </div>
      <div className="collection-titles flex-col gap-xs align-left">
        <Button
          text="make up"
          btnStyle="underline-btn collection-title main-title"
          textStyle="btn-text"
        />
        <div className="sub-titles flex-col gap-2xs align-left">
          <Button
            text="lipstick"
            btnStyle="underline-btn collection-title sub-title"
            textStyle="btn-text-lgt"
          />
          <Button
            text="foundation"
            btnStyle="underline-btn collection-title sub-title"
            textStyle="btn-text-lgt"
          />
          <Button
            text="face powder"
            btnStyle="underline-btn collection-title sub-title"
            textStyle="btn-text-lgt"
          />
          <Button
            text="mascara"
            btnStyle="underline-btn collection-title sub-title"
            textStyle="btn-text-lgt"
          />
          <Button
            text="eyeshadow"
            btnStyle="underline-btn collection-title sub-title"
            textStyle="btn-text-lgt"
          />
          <Button
            text="blush"
            btnStyle="underline-btn collection-title sub-title"
            textStyle="btn-text-lgt"
          />
          <Button
            text="eyeliner"
            btnStyle="underline-btn collection-title sub-title"
            textStyle="btn-text-lgt"
          />
        </div>
      </div>
    </div>
  );

  const dropdownUserSetting = (
    <div className="user-setting-dropdown flex-col gap-sm align-left">
      {/* <div className="user-alias flex-row gap-sm">
        <div className="user-identity flex-col gap-xs align-left">
          <p className="user-name body">{userName}</p>
          <p className="user-id body">{`${signedInEmail}`}</p>
        </div>
      </div> */}
      <div className="setting-btns flex-col gap-xs align-left">
        <Button
          text="User Setting"
          btnStyle="underline-btn setting-btn"
          textStyle="body"
          iconL="bi bi-person-gear icon-size-17"
          onClick={() => navigate("/users")}
        />
        <Button
          text="sign out"
          btnStyle="underline-btn setting-btn"
          textStyle="body"
          iconL="bi bi-arrow-bar-left icon-size-17"
          onClick={handleSignOut}
        />
      </div>
    </div>
  );

  let dropdownSct = null;
  if (dropdownStyle === "collection-dropdown") {
    dropdownSct = dropdownCollection;
  } else if (dropdownStyle === "user-setting-dropdown") {
    dropdownSct = dropdownUserSetting;
  }

  return dropdownSct;
};

export default Dropdown;
