export default function NoDataFound({ children }) {
    return (
        <p style={{
                fontSize: "1.2rem",
                textAlign: "center",
                width: "100%",
                height: "150px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
        }}>{ children }</p>
    )
}