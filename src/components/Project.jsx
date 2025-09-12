import React from 'react';

const Project = () => {
    return (
        <section id="project" className="container">
            <h2>Project Analysis</h2>
            
            {/* Tổng quan */}
            <div className="project-section">
                <h3>📊 Dataset Overview</h3>
                <div className="overview-grid">
                    <div className="overview-item">
                        <h4>📈 Dataset Statistics</h4>
                        <ul>
                            <li><strong>Total Samples:</strong> 284,807 transactions</li>
                            <li><strong>Features:</strong> 31 (Time, V1-V28, Amount, Class)</li>
                            <li><strong>Data Quality:</strong> No missing values</li>
                            <li><strong>Time Range:</strong> 48 hours of transactions</li>
                            <li><strong>Amount Range:</strong> $0.00 to $25,691.16</li>
                        </ul>
                    </div>
                    <div className="overview-item">
                        <h4>⚖️ Class Distribution</h4>
                        <ul>
                            <li><strong>Normal Transactions:</strong> 284,315 (99.83%)</li>
                            <li><strong>Fraud Transactions:</strong> 492 (0.17%)</li>
                            <li><strong>Imbalance Ratio:</strong> 1:578 (highly imbalanced)</li>
                            <li><strong>Challenge:</strong> Severe class imbalance</li>
                        </ul>
                    </div>
                    <div className="overview-item">
                        <h4>🔍 Data Characteristics</h4>
                        <ul>
                            <li><strong>V1-V28:</strong> PCA-transformed features (privacy)</li>
                            <li><strong>Time:</strong> Seconds elapsed between transactions</li>
                            <li><strong>Amount:</strong> Transaction amount in dollars</li>
                            <li><strong>Class:</strong> 0 (Normal) or 1 (Fraud)</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Các mô hình tuyến tính */}
            <div className="project-section">
                <h3>🤖 Machine Learning Models</h3>
                
                <div className="model-grid">
                    {/* Logistic Regression */}
                    <div className="model-card large">
                        <h4>📈 Logistic Regression</h4>
                        <div className="code-block">
                            <div className="code-title">Implementation</div>
                            <pre><code>{`from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report

# Logistic Regression with SMOTE
lr_model = LogisticRegression(
    solver='saga',
    penalty='l2',
    C=1.0,
    random_state=42,
    max_iter=5000
)

# Train on SMOTE balanced data
lr_model.fit(X_train_smote, y_train_smote)

# Predictions
y_pred = lr_model.predict(X_test_scaled)
print(classification_report(y_test, y_pred))`}</code></pre>
                        </div>
                        <div className="model-results">
                            <h5>Results:</h5>
                            <ul>
                                <li><strong>Accuracy:</strong> 99.94%</li>
                                <li><strong>Precision:</strong> 79.25%</li>
                                <li><strong>Recall:</strong> 85.71%</li>
                                <li><strong>F1-Score:</strong> 82.35%</li>
                            </ul>
                        </div>
                    </div>

                    {/* Random Forest */}
                    <div className="model-card medium">
                        <h4>🌲 Random Forest</h4>
                        <div className="code-block">
                            <div className="code-title">Implementation</div>
                            <pre><code>{`from sklearn.ensemble import RandomForestClassifier

# Random Forest with SMOTE
rf_model = RandomForestClassifier(
    n_estimators=100,
    max_depth=10,
    random_state=42,
    class_weight='balanced'
)

# Train on SMOTE balanced data
rf_model.fit(X_train_smote, y_train_smote)

# Feature importance
feature_importance = rf_model.feature_importances_
top_features = ['V17', 'V14', 'V12', 'V10', 'V16']`}</code></pre>
                        </div>
                        <div className="model-results">
                            <h5>Results:</h5>
                            <ul>
                                <li><strong>Accuracy:</strong> 99.95%</li>
                                <li><strong>Precision:</strong> 83.17%</li>
                                <li><strong>Recall:</strong> 85.71%</li>
                                <li><strong>F1-Score:</strong> 84.42%</li>
                            </ul>
                        </div>
                    </div>

                    {/* Decision Tree */}
                    <div className="model-card medium">
                        <h4>🌳 Decision Tree</h4>
                        <div className="code-block">
                            <div className="code-title">Implementation</div>
                            <pre><code>{`from sklearn.tree import DecisionTreeClassifier

# Decision Tree with SMOTE
dt_model = DecisionTreeClassifier(
    random_state=42,
    max_depth=10,
    min_samples_split=20,
    min_samples_leaf=10,
    class_weight='balanced'
)

# Train on SMOTE balanced data
dt_model.fit(X_train_smote, y_train_smote)

# Predictions
y_pred = dt_model.predict(X_test_scaled)`}</code></pre>
                        </div>
                        <div className="model-results">
                            <h5>Results:</h5>
                            <ul>
                                <li><strong>Accuracy:</strong> 99.90%</li>
                                <li><strong>Precision:</strong> 75.00%</li>
                                <li><strong>Recall:</strong> 80.00%</li>
                                <li><strong>F1-Score:</strong> 77.42%</li>
                            </ul>
                        </div>
                    </div>

                    {/* KNN */}
                    <div className="model-card medium">
                        <h4>📍 K-Nearest Neighbors</h4>
                        <div className="code-block">
                            <div className="code-title">Implementation</div>
                            <pre><code>{`from sklearn.neighbors import KNeighborsClassifier

# KNN with SMOTE
knn_model = KNeighborsClassifier(
    n_neighbors=5,
    weights='distance',
    algorithm='auto',
    metric='euclidean',
    n_jobs=-1
)

# Train on SMOTE balanced data
knn_model.fit(X_train_smote, y_train_smote)

# Predictions
y_pred = knn_model.predict(X_test_scaled)`}</code></pre>
                        </div>
                        <div className="model-results">
                            <h5>Results:</h5>
                            <ul>
                                <li><strong>Accuracy:</strong> 99.92%</li>
                                <li><strong>Precision:</strong> 78.57%</li>
                                <li><strong>Recall:</strong> 82.14%</li>
                                <li><strong>F1-Score:</strong> 80.33%</li>
                            </ul>
                        </div>
                    </div>

                    {/* SVM */}
                    <div className="model-card medium">
                        <h4>⚡ Support Vector Machine</h4>
                        <div className="code-block">
                            <div className="code-title">Implementation</div>
                            <pre><code>{`from sklearn.svm import SVC

# SVM with SMOTE
svm_model = SVC(
    kernel='rbf',
    C=1.0,
    gamma='scale',
    random_state=42,
    probability=True,
    class_weight='balanced'
)

# Train on SMOTE balanced data
svm_model.fit(X_train_smote, y_train_smote)

# Predictions
y_pred = svm_model.predict(X_test_scaled)`}</code></pre>
                        </div>
                        <div className="model-results">
                            <h5>Results:</h5>
                            <ul>
                                <li><strong>Accuracy:</strong> 99.91%</li>
                                <li><strong>Precision:</strong> 76.92%</li>
                                <li><strong>Recall:</strong> 81.25%</li>
                                <li><strong>F1-Score:</strong> 79.04%</li>
                            </ul>
                        </div>
                    </div>

                    {/* Voting Classifier */}
                    <div className="model-card large">
                        <h4>🗳️ Voting Classifier (Ensemble)</h4>
            <div className="code-block">
                            <div className="code-title">Implementation</div>
                            <pre><code>{`from sklearn.ensemble import VotingClassifier

# Combine multiple models
clf1 = LogisticRegression(random_state=42, class_weight='balanced')
clf2 = KNeighborsClassifier(n_neighbors=5, weights='distance')
clf3 = RandomForestClassifier(random_state=42, n_estimators=100)

# Ensemble with Soft Voting
eclf = VotingClassifier(
    estimators=[('lr', clf1), ('knn', clf2), ('rf', clf3)],
    voting='soft'
)

eclf.fit(X_train_scaled, y_train)
y_pred = eclf.predict(X_test_scaled)`}</code></pre>
                        </div>
                        <div className="model-results">
                            <h5>Results:</h5>
                            <ul>
                                <li><strong>Accuracy:</strong> 99.95%</li>
                                <li><strong>Precision:</strong> 83.17%</li>
                                <li><strong>Recall:</strong> 85.71%</li>
                                <li><strong>F1-Score:</strong> 84.42%</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* GitHub Link */}
            <div className="project-section">
                <h3>📁 Source Code</h3>
                <div className="github-section">
                    <div className="github-card">
                        <div className="github-icon">🐙</div>
                        <div className="github-content">
                            <h4>View Complete Source Code</h4>
                            <p>Explore the full Jupyter notebook with detailed analysis, data preprocessing, model training, and evaluation results.</p>
                            <a 
                                href="https://github.com/dangkhoi-dev/Project-HCMUT-EE-Lab" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="github-link"
                            >
                                <span>View on GitHub</span>
                                <span className="github-arrow">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tổng kết */}
            <div className="project-section">
                <h3>🎯 Project Summary</h3>
                <div className="summary-content">
                    <div className="summary-item">
                        <h4>✅ Key Achievements</h4>
                        <ul>
                            <li>Successfully handled highly imbalanced dataset (1:578 ratio)</li>
                            <li>Achieved 99.95% accuracy with Random Forest + Voting Classifier</li>
                            <li>Maintained low false alarm rate while detecting 85.71% of fraud cases</li>
                            <li>Implemented SMOTE technique for data balancing</li>
                        </ul>
                    </div>
                    <div className="summary-item">
                        <h4>🔧 Technical Approach</h4>
                        <ul>
                            <li>Used SMOTE to handle class imbalance</li>
                            <li>Applied ensemble methods (Voting Classifier)</li>
                            <li>Feature scaling with StandardScaler</li>
                            <li>Proper train/validation/test split (60/20/20)</li>
                        </ul>
                    </div>
                    <div className="summary-item">
                        <h4>📊 Best Model Performance</h4>
                        <ul>
                            <li><strong>Model:</strong> Random Forest + Voting Classifier</li>
                            <li><strong>Accuracy:</strong> 99.95%</li>
                            <li><strong>Fraud Detection Rate:</strong> 85.71%</li>
                            <li><strong>False Alarm Rate:</strong> 0.1%</li>
                            <li><strong>Business Impact:</strong> Suitable for practical application</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;