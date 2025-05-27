import React from "react";

function Button({ onClick, children }) {
    return (
        <button
            onClick={(e) => {
                e.stopPropagation();
                onClick();
            }}
            style={{
                margin: "8px",
                padding: "10px 20px",
                fontSize: "16px",
                cursor: "pointer",
                borderRadius: "4px",
                border: "1px solid #ccc",
                backgroundColor: "#f0f0f0",
            }}
        >
            {children}
        </button>
    );
}

export default function Toolbar() {
    return (
        <div
            className="Toolbar"
            onClick={() => {
                alert("You clicked on the toolbar!");
            }}
            style={{
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                textAlign: "center",
            }}
        >
            <Button
                onClick={() => {
                    alert("Playing!");
                }}
            >
                Play Movie
            </Button>

            <Button
                onClick={() => {
                    alert("Uploading!");
                }}
            >
                Upload Image
            </Button>
        </div>
    );
}