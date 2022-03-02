import { Container } from "@mui/material";
import React from "react";
import CircularCard from "../../CircularCard/CircularCard";

import "./JurisdictionSection.css";

const circularCardData = [
  {
    text_en: "Imprisonment, preventive detention or a fine of more than five hundred thousand Lebanese pounds.",
    text_ar: "Imprisonment, preventive detention or a fine of more than five hundred thousand Lebanese pounds.",
    color: "sandybrown",
  },
  {
    text_en: "Additional or secondary penalty or personal compensations of more than five hundred thousand Lebanese pounds.",
    text_ar: "Additional or secondary penalty or personal compensations of more than five hundred thousand Lebanese pounds.",
    color: "salmon",
  },
  {
    text_en: "Revocation of defense stipulated in Article 73 of the Criminal Procedures Code.",
    text_ar: "Revocation of defense stipulated in Article 73 of the Criminal Procedures Code.",
    color: "navajowhite",
  },
  {
    text_en: "Penalty for a violation correlative with a misdemeanor.",
    text_ar: "Penalty for a violation correlative with a misdemeanor.",
    color: "burlywood",
  },
];

const JurisdictionSection = (props) => {
  return (
    <Container>
      <div className="jurisdiction-section">
        <h2 className="section__title">Their jurisdiction:</h2>
        <div className="jurisdiction__body--1">
          <p className="jurisdiction__positive">
            <span className="jurisdiction__bullet">
              <img src="/assets/images/approval.png" alt="" />
            </span>
            The Court of Appeal considers the appeal of all judgments issued by the Criminal Single Judge in the cases of misdemeanors, provided that
            they shall have been settled in the merits of the dispute. <br />
            However, if they were not settled in the merits of the dispute, they shall be appealed with the final judgment only.
          </p>
          <p className="jurisdiction__exception">With the exception of: </p>
          <div>
            <div style={{ position: "relative" }}>
              <span className="jurisdiction__bullet">
                <img src="/assets/images/denial-colored.png" alt="" />
              </span>
            </div>
            <p className="jurisdiction__negative">
              The appeal of decisions that settle one or more of the formal defenses stipulated in Article 73 of the Criminal Procedures Code shall be
              accepted.
            </p>
            <p className="jurisdiction__negative">
              Decisions by which the Single Judge terminates the lawsuit without addressing its subject matter.
            </p>
            <p className="jurisdiction__negative">Decisions issued on accepting or revoking the release requests.</p>
          </div>
        </div>
        <div className="jurisdiction__body--2">
          <div className="body2__title">
            The Court of Appeal considers the appeal of the judgments issued by the Criminal Single Judge in the cases of violations, provided that
            they shall be on:
          </div>
          <div className="body2__data">
            {circularCardData.map((item, index) => {
              return (
                <div key={`${item}-${index}`} className="body2__cardWrapper">
                  <CircularCard {...item} />
                </div>
              );
            })}
          </div>

          <div className="body2__title" style={{ marginTop: "3rem" }}>
            The Court of Appeal is entitled, when exercising its tasks, to listen to witnesses, interrogate the parties of the lawsuit, invite new
            witnesses, appoint an expert, listen to experts and carry out any new investigations it deems appropriate...
          </div>
        </div>
      </div>
    </Container>
  );
};

export default JurisdictionSection;
