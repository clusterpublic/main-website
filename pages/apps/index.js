import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { LuTerminalSquare, LuImage, LuLink2, LuExternalLink } from "react-icons/lu";
const AiArena = () => {
  const modelsData = [
    {
      "name": "CluBot",
      "description": " Do your Wallet Transactions with AI",
      "url": "https://wallet.clusterprotocol.ai",
      "image": "./modelimg/clubot.png"
      },
      {
          "name": "SuperX",
          "description": " Transform Your X Conversations with AI",
          "url": "https://superx.clusterprotocol.ai",
          "image": "https://superx.clusterprotocol.ai/word-white-logo.png"
      },
      {
        "name": "Coming Soon...",
        "description": " ",
        "url": "#",
        "image": "https://superx.clusterprotocol.ai/word-white-logo.png"
    },
      
  ]
  return (

    <>
      <div style={{ margin: "0 auto", marginTop: "25vh", width: "80%" }}>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:"center",}}>
          <div class="headerTitleContainer" style={{margin:'0 auto'}}><h1  style={{fontSize:'1.5rem'}} class="gWhite">Cluster Models</h1></div>
            {/* <h1 style={{ color: "white", fontWeight: 500 }}>Cluster Models</h1> */}
            <p style={{ color: "white", margin: "1vh 0" }}>
              Discover amazing ML apps made by the community!
            </p>
          </div>
          {/* <input
            style={{
              border: "1px solid grey",
              background: "transparent",
              borderRadius: "0.5rem",
              fontSize: "1.3rem",
              color: "white",
              fontFamily: "'Exo 2'",
              padding: "0.3rem 1rem",
            }}
            placeholder="Search Models"
          ></input> */}
        </div>

        {/* GRID VIEW OF MODELS */}
        <div
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(25rem, 1fr))",
            display: "grid",
            margin: "7vh 0px",
            gridGap: "2rem 0",
          }}
        >
          {/* Mapping over models data */}
          {modelsData.map((model, index) => (
            <Link key={index} href={`${model.url}`}>
              <div className="psCard"
              style={{width:'23rem'}}
              >
                {/* Model image */}
                <img
                  src={model.image}
                  style={{
                    height: "15rem",
                    position: "absolute",
                    width: "15rem",
                    objectFit: "contain",
                    top: '-1rem',
                    left:'4rem',
                    filter:index==2?"blur(16px)":""
                  }}
                ></img>

                {/* Details */}
                <div
                  style={{
                    width: '90%',
                    background: '#00000057',
                    display: 'flex',
                    marginTop: 'auto',
                    height: '4.4rem',
                    color: 'white',
                    backdropFilter: 'blur(1.5rem)',
                    padding: '0px 5%',
                    borderRadius: '0rem',
                    marginBottom: '0.3rem'
                  }}
                >
                  {/* Text Data */}
                  <div
                    style={{
                      width: "18rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    <h1 style={{ fontSize: "1rem", fontWeight: "700" }}>
                      {model.name}
                    </h1>
                    <h1 style={{ fontSize: "0.7em",margin:'0.2rem 0', fontWeight: "400", fontFamily:"exo 2", color:'rgb(200,200,200)' }}>
                      {model.description}
                    </h1>
                  </div>
                  {/* SVG */}
                  <div
                    style={{
                      background: '#1f1e1e',
                      borderRadius: '2.6rem',
                      height: '3rem',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '3rem',
                      margin: 'auto'
                    }}
                  >
                    <LuExternalLink size={30}></LuExternalLink>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default AiArena;
