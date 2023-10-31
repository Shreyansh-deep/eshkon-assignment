import accodianData from "@/data/accordian";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { BiChevronDown } from "react-icons/bi";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { getRoleBySlug } from "@/util/roleUtil";

const RolesAccordian = () => {
  const router = useRouter();
  if (!router.query.role) {
    return null;
  }

  return (

// Here I am using dummy datas for RolesAccordian(i.e. same for all the roles.)

    <section className={styles["accordian-section"]}>
      <h1 className={styles["section-header"]}>
        Accelerate the process of connecting with best-fit candidates.
      </h1>
      <div className={styles["accordian"]}>
        {getRoleBySlug(router.query.role as string)?.accordianData.map((accodianData, index) => (
          <Accordion key={index} sx={{ boxShadow: "0" }}>
            <AccordionSummary
              sx={{ padding: "40px 10px" }}
              expandIcon={<BiChevronDown />}
              aria-controls="panel-content"
              id="panel-header"
            >
              <Typography className={styles["accordian-title"]}>{accodianData.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#554f4f" }}>
                {accodianData.summary}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      <div className={styles["image-wrapper"]}>
        <img src={getRoleBySlug(router.query.role as string)?.accordianImageUrl} alt="accordian-image"/>
      </div>
    </section>
  );
};
export default RolesAccordian;
